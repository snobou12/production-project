import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import classes from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(classes.navbar, {}, [className])}>
        <div className={classes.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={classes.mainLink}
            >
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                О нас
            </AppLink>
        </div>
    </div>
);

export default Navbar;
