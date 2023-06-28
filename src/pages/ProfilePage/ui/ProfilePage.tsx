import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import {
    ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileLoading, getProfileReadonly, profileActions, profileReducer,
} from 'entities/Profile';

import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
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
    const readonly = useSelector(getProfileReadonly);
    const onChangeFirstName = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ first: value || ' ' }));
    }, [dispatch]);
    const onChangeLastName = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ lastname: value || ' ' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ city: value || ' ' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ username: value || ' ' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value:string) => {
        dispatch(profileActions.updateProfileData({ avatar: value || ' ' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency:Currency) => {
        dispatch(profileActions.updateProfileData({ currency: currency || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country:Country) => {
        dispatch(profileActions.updateProfileData({ country: country || '' }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader readonly={readonly} />
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
