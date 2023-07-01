import { FC, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Code.module.scss';
import Button, { ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text:string;
}
const Code: FC<CodeProps> = (props) => {
    const { className, text } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <Button onClick={onCopy} className={classes.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={classes.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};

export default Code;
