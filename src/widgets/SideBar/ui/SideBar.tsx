import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './SideBar.module.scss';
import { SidebarItemsList } from '../model/items';
import SidebarItem from '../SideberItem/SidebarItem';

interface SideBarProps {
	className?: string;
}
const SideBar: FC<SideBarProps> = memo((props:SideBarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classes.lang} />
            </div>
        </div>
    );
});

export default SideBar;
