import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import classes from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, itaque.
            </Modal>
        </div>
    );
};

export default Navbar;
