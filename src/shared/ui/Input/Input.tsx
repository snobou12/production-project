import React, {
    FC, InputHTMLAttributes, ReactHTMLElement, SyntheticEvent, memo, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Input.module.scss';

// из-за конфликта типов onChange, Omit забирает из типа все пропсы, исключает некоторые (value,onChange в данном случае)
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    autoFocus?:boolean;
    value?:string | number;
    placeholder?:string;
    type?:string;
    readonly?:boolean;
    onChange?:(value:string)=>void;
}
const Input: FC<InputProps> = memo((props:InputProps) => {
    const { t } = useTranslation();
    const {
        className, value, onChange, autoFocus, readonly = false, placeholder = t('placeholder'), type = 'text', ...otherProps
    } = props;
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    // выходим
    const onBlur = () => {
        setIsFocused(false);
    };
    // нажимаем
    const onFocus = () => {
        setIsFocused(true);
    };

    // какая часть выделена(нет хорошего свойства => any)
    const onSelect = (e:SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(e.currentTarget.selectionStart || 0);
    };

    const isCaretVisible = isFocused && !readonly;
    const mods:Mods = {
        [classes.readonly]: readonly,
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            if (ref.current) ref?.current.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(classes.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={classes.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={ref}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classes.input}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && <span style={{ left: `${caretPosition * 9}px` }} className={classes.caret} />}

            </div>
        </div>

    );
});

export default Input;
