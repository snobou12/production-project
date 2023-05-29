import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Button.module.scss";

export enum ThemeButton{
    CLEAR="clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children:ReactNode;
    theme?:ThemeButton
}
const Button: FC<ButtonProps> = (props) => {
    const {className,children,theme=ThemeButton.CLEAR,...othersProps}=props;
    return (
        <button  className={classNames(classes.Button, {}, [className,classes[theme]])} {...othersProps}>
            {children}
        </button>
    );
};

export default Button;
