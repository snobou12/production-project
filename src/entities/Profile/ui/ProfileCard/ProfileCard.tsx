import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { IProfile } from 'entities/Profile/model/types/profile';
import Loader from 'shared/ui/Loader/Loader';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?:IProfile
    error?:string;
    isLoading?:boolean;
}
const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const { data, error, isLoading } = props;

    const { className } = props;

    if (isLoading) {
        return (
            <div className={classNames(classes.ProfileCard, { }, [className, classes.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(classes.ProfileCard, { }, [className, classes.error])}>
                <Text theme={TextTheme.ERROR} title={t('profile_title_error')} text={t('try_reload_page')} />
            </div>
        );
    }
    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <div className={classes.header}>
                <Text title={t('profile_page_title')} />
                <Button theme={ButtonTheme.OUTLINE} className={classes.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={classes.data}>
                <Input value={data?.first} placeholder={t('firstname_placeholder')} className={classes.input} />
                <Input value={data?.lastname} placeholder={t('lastname_placeholder')} className={classes.input} />
            </div>
        </div>
    );
};

export default ProfileCard;
