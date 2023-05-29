import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames(classes.switcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
