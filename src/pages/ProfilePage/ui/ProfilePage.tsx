import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import classes from './ProfilePage.module.scss';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {/* Баг с переводом */}
                Страница пользователя
                {/* {t('profile_page_title')} */}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
