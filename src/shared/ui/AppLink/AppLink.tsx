import { FC, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
	theme?: AppLinkTheme;
}
const AppLink: FC<AppLinkProps> = memo((props:AppLinkProps) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
