import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme{
    CLEAR='clear',
    CLEAR_INVERTED='clearInverted',
    OUTLINE='outline',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted'
}

export enum ButtonSize{
    M='size_m',
    L='size_l',
    XL='size_xl',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?:ButtonTheme;
    size?:ButtonSize;
    children:ReactNode;
    square?:boolean;
}
const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, size = ButtonSize.M, children, square, ...othersProps
    } = props;

    const mods:Record<string, boolean> = {
        [classes[theme]]: true,
        [classes.square]: square,
        [classes[size]]: true,

    };
    return (
        <button className={classNames(classes.Button, mods, [className])} {...othersProps}>
            {children}
        </button>
    );
};

export default Button;
