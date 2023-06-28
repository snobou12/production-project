import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?:Country;
    onChange:(country:Country)=>void;
    readonly?:boolean;
}

// все пропсы, которые мы итерируем нужно оборачивать useMemo, но так как тут статично, то просто отдельным списком выше поставили
const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },

];
const CountrySelect: FC<CountrySelectProps> = memo((props:CountrySelectProps) => {
    // пока что profile. Эту сущность можно будет юзать где угодно
    const { t } = useTranslation('profile');
    const {
        className, value, onChange, readonly,
    } = props;
    const onChangeHandler = useCallback((val:string) => {
        onChange?.(val as Country);
    }, [onChange]);
    return (
        <Select
            label={t('country_placeholder')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            readonly={readonly}
        />
    );
});

export default CountrySelect;
