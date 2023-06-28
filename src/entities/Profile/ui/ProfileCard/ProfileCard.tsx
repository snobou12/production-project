import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { IProfile } from 'entities/Profile/model/types/profile';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?:IProfile
    error?:string;
    readonly:boolean;
    isLoading?:boolean;
    onChangeFirstName:(value:string)=>void;
    onChangeLastName:(value:string)=>void;
    onChangeAge:(value:string)=>void;
    onChangeCity:(value:string)=>void;
    onChangeUsername:(value:string)=>void;
    onChangeAvatar:(value:string)=>void;
    onChangeCurrency:(currency:Currency)=>void;
    onChangeCountry:(country:Country)=>void;

}
const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const {
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,

    } = props;

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
            <div className={classes.data}>

                {data?.avatar && (
                    <div className={classes.AvatarWrapper}>
                        <Avatar src={data.avatar} size={150} />
                    </div>
                )}

                <Input onChange={onChangeFirstName} readonly={readonly} value={data?.first} placeholder={t('firstname_placeholder')} className={classes.input} />
                <Input onChange={onChangeLastName} readonly={readonly} value={data?.lastname} placeholder={t('lastname_placeholder')} className={classes.input} />
                <Input type="number" onChange={onChangeAge} readonly={readonly} value={data?.age} placeholder={t('age_placeholder')} className={classes.input} />
                <Input onChange={onChangeCity} readonly={readonly} value={data?.city} placeholder={t('city_placeholder')} className={classes.input} />
                <Input onChange={onChangeUsername} readonly={readonly} value={data?.username} placeholder={t('username_placeholder')} className={classes.input} />
                <Input onChange={onChangeAvatar} readonly={readonly} value={data?.avatar} placeholder={t('avatar_placeholder')} className={classes.input} />

                <CurrencySelect className={classes.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
                <CountrySelect className={classes.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />

            </div>
        </div>
    );
};

export default ProfileCard;
