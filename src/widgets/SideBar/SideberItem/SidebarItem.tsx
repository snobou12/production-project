import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../model/items';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item:SidebarItemType;
    collapsed:boolean;
}
// memo сравнивает пропсы, если пропсы не изменились, то перерисовка не произойдет при изменении чего либо в родители
const SidebarItem: FC<SidebarItemProps> = memo((props:SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    if ((item.authOnly && !authData?.id) || (item.authOnly && !authData?.username)) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(classes.item, { [classes.collapsed]: collapsed }, [])}
        >
            <item.Icon className={classes.icon} />

            <span className={classes.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;
