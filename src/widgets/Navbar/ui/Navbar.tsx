import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(classes.navbar, {}, [className])} />
);

export default Navbar;
