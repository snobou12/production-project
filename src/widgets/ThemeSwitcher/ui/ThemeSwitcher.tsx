import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames(className, {}, [])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

export default ThemeSwitcher;
