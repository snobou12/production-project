import { FC, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOption{
    value:string;
    content:string;
}

interface SelectProps {
    className?: string;
    label?:string;
    options?:SelectOption[];
    value?:string;
    onChange?:(value:string)=>void;
    readonly?:boolean;
}
const Select: FC<SelectProps> = memo((props:SelectProps) => {
    const {
        className, label, options, value, onChange, readonly = false,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={classes.option} key={opt.value} value={opt.value}>{opt.content}</option>
    )), [options]);
    const mods:Mods = {

    };
    return (
        <div className={classNames(classes.Wrapper, mods, [className])}>
            {label && (
                <span className={classes.label}>
                    {`${label}>`}
                </span>
            )}
            <select disabled={readonly} value={value} onChange={(e) => onChange?.(e.target.value)} className={classes.select}>
                {optionList}
            </select>
        </div>
    );
});

export default Select;
