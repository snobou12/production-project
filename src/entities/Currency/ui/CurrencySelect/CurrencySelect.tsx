import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?:Currency;
    onChange:(curreny:Currency)=>void;
    readonly?:boolean;
}

// все пропсы, которые мы итерируем нужно оборачивать useMemo, но так как тут статично, то просто отдельным списком выше поставили
const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },

];
const CurrencySelect: FC<CurrencySelectProps> = memo((props:CurrencySelectProps) => {
    // пока что profile. Эту сущность можно будет юзать где угодно
    const { t } = useTranslation('profile');
    const {
        className, value, onChange, readonly,
    } = props;
    const onChangeHandler = useCallback((val:string) => {
        onChange?.(val as Currency);
    }, [onChange]);
    return (
        <Select
            label={t('currency_placeholder')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;
