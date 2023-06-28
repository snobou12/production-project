import React, {
    FC, InputHTMLAttributes, ReactHTMLElement, SyntheticEvent, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Input.module.scss';

// из-за конфликта типов onChange, Omit забирает из типа все пропсы, исключает некоторые (value,onChange в данном случае)
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    autoFocus?:boolean;
    value?:string;
    placeholder?:string;
    onChange?:(value:string)=>void;
}
const Input: FC<InputProps> = memo((props:InputProps) => {
    const { t } = useTranslation();
    const {
        className, value, onChange, autoFocus, placeholder = t('placeholder'), type = 'text', ...otherProps
    } = props;
    const [caretPosition, setCaretPostion] = useState<number>(0);

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPostion(e.target.value.length);
    };

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    // выходим
    const onBlur = () => {
        setIsFocused(false);
    };
    // нажимаем
    const onFocus = () => {
        setIsFocused(true);
    };

    // какая часть выделена(нет хорошего свойства => any)
    const onSelect = (e:SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPostion(e.currentTarget.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            if (ref.current) ref?.current.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(classes.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classes.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={ref}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classes.input}
                    {...otherProps}
                />
                {isFocused && <span style={{ left: `${caretPosition * 9}px` }} className={classes.caret} />}

            </div>
        </div>

    );
});

export default Input;
