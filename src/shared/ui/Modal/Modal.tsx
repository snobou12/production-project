import {
    FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?:ReactNode;
    isOpen?:boolean;
    onClose?:()=>void;
    lazy?:boolean;
}

const ANIMATION_DELAY = 300;
const Modal: FC<ModalProps> = (props) => {
    const { theme } = useTheme();
    const {
        className, children, isOpen, onClose, lazy,
    } = props;
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const onContentClick = (e:MouseEvent) => {
        e.stopPropagation();
    };
    const mods:Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,

    };
    // чтобы не было новый ссылок => useCallback
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(classes.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
