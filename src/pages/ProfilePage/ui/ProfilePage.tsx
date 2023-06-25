import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
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
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
