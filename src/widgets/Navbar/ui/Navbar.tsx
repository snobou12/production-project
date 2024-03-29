import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import classes from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
const Navbar: FC<NavbarProps> = memo((props:NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            {isAuthModal && !authData && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            {authData ? (
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Logout')}
                </Button>
            ) : (
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    {t('Login')}
                </Button>
            ) }
        </div>
    );
});

export default Navbar;
