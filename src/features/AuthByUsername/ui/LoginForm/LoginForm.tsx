import {
    FC, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(classes.LoginForm, {}, [className])}>
                <Text title={t('auth')} />
                {error && (
                    <Text text={error} theme={TextTheme.ERROR} />
                )}
                <Input value={username} onChange={onChangeUsername} className={classes.input} type="text" placeholder={t('type_username')} autoFocus />
                <Input value={password} onChange={onChangePassword} className={classes.input} type="text" placeholder={t('type_password')} />

                <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={classes.loginBtn}>
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
