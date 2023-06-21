import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum TextTheme{
    PRIMARY='primary',
    ERROR='error',
}

interface TextProps {
    className?: string;
    title?:string;
    text?:string;
    theme?:TextTheme
}
const Text: FC<TextProps> = (props) => {
    const {
        className, title, text, theme = TextTheme.PRIMARY,
    } = props;

    const mods:Record<string, boolean> = {
        [classes[theme]]: true,
    };
    return (
        <div className={classNames('', mods, [className])}>
            {title && (
                <p className={classes.title}>
                    {title}
                </p>
            )}
            {text && (
                <p className={classes.text}>
                    {text}
                </p>
            )}

        </div>
    );
};

export default Text;
