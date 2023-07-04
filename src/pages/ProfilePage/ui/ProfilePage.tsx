import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import {
    ProfileCard, ValidateProfileError, fetchProfileData, getProfileError, getProfileForm, getProfileLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer,
} from 'entities/Profile';

import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

import classes from './ProfilePage.module.scss';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const authData = useSelector(getUserAuthData);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const onChangeFirstName = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastName = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency:Currency) => {
        dispatch(profileActions.updateProfileData({ currency: currency || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country:Country) => {
        dispatch(profileActions.updateProfileData({ country: country || '' }));
    }, [dispatch]);

    const { id } = useParams<{id:string}>();
    const canEdit = id === authData?.id;
    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_NO_DATA]: t('INCORRECT_NO_DATA'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('INCORRECT_USER_AGE'),
        [ValidateProfileError.INCORRECT_USER_AVATAR]: t('INCORRECT_USER_AVATAR'),
        [ValidateProfileError.INCORRECT_USER_CITY]: t('INCORRECT_USER_CITY'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('INCORRECT_USER_COUNTRY'),
        [ValidateProfileError.INCORRECT_USER_CURRENCY]: t('INCORRECT_USER_CURRENCY'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('INCORRECT_USER_DATA'),
        [ValidateProfileError.INCORRECT_USER_FIRSTNAME]: t('INCORRECT_USER_FIRSTNAME'),
        [ValidateProfileError.INCORRECT_USER_LASTNAME]: t('INCORRECT_USER_LASTNAME'),
        [ValidateProfileError.INCORRECT_USER_USERNAME]: t('INCORRECT_USER_USERNAME'),
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),

    };
    useEffect(() => {
        dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text theme={TextTheme.ERROR} title={t('profile_not_found')} />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader readonly={readonly} canEdit={canEdit} />
                {validateErrors?.length && validateErrors.map((err) => <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} align={TextAlign.LEFT} />)}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}

                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
