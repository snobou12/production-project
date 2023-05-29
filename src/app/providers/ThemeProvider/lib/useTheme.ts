import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from './ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const th = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(th);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, th);
    };

    return { theme, toggleTheme };
}
