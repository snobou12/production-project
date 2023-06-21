import { FC } from 'react';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter: FC = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('increment_btn')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('decrement_btn')}</Button>
        </div>
    );
};

export default Counter;
