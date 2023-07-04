import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    readonly:boolean;
    canEdit?:boolean;

}
const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const {
        className, readonly, canEdit = false,
    } = props;
    const authData = useSelector(getUserAuthData);
    const handleClickEditBtn = useCallback(() => {
        if (readonly) {
            dispatch(profileActions.handleChangeReadonly(!readonly));
            return;
        }
        dispatch(profileActions.cancelEdit());
    }, [dispatch, readonly]);

    const handleClickSave = useCallback(() => {
        dispatch(updateProfileData(authData?.id));
    }, [dispatch, authData?.id]);
    return (
        <div className={classes.ProfilePageHeader}>
            <Text className={classes.ProfileText} title={t('profile_page_title')} />
            {canEdit && (
                <div className={classes.features}>
                    <Button onClick={handleClickEditBtn} theme={readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED} className={classes.editBtn}>
                        {readonly ? t('edit') : t('cancel')}
                    </Button>
                    {!readonly && (
                        <Button onClick={handleClickSave} theme={ButtonTheme.OUTLINE}>
                            {t('save')}
                        </Button>
                    ) }
                </div>
            )}

        </div>
    );
};

export default ProfilePageHeader;
