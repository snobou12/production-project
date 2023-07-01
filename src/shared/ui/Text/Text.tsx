import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum TextTheme{
    PRIMARY='primary',
    ERROR='error',
}

export enum TextAlign{
    LEFT='left',
    RIGHT='right',
    CENTER='center',
}

export enum TextSize{
    M='size_m',
    L='size_l',
}

interface TextProps {
    className?: string;
    title?:string;
    text?:string;
    theme?:TextTheme
    align?:TextAlign
    size?:TextSize
}
const Text: FC<TextProps> = (props) => {
    const {
        className, title, text, align = TextAlign.LEFT, theme = TextTheme.PRIMARY, size = TextSize.M,
    } = props;

    const mods:Record<string, boolean> = {
        [classes[theme]]: true,
        [classes[align]]: true,
        [classes[size]]: true,

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
