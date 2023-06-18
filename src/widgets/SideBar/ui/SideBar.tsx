import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

import { useTranslation } from 'react-i18next';
import classes from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}
const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <Button className={classes.collapsedBtn} theme={ButtonTheme.BACKGROUND_INVERTED} square size={ButtonSize.L} data-testid="sidebar-toggle" onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={classes.item}
                >
                    <MainIcon className={classes.icon} />

                    <span className={classes.link}>
                        {t('main_page_link')}
                    </span>
                </AppLink>
                <div>
                    <AppLink to={RoutePath.about} className={classes.item} theme={AppLinkTheme.SECONDARY}>

                        <AboutIcon className={classes.icon} />
                        <span className={classes.link}>
                            {t('about_page_link')}
                        </span>
                    </AppLink>
                </div>

            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classes.lang} />
            </div>
        </div>
    );
};

export default SideBar;
