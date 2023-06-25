import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}
const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const { className } = props;
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
