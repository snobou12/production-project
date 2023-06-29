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
        let th:Theme;
        switch (theme) {
        case Theme.DARK:
            th = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            th = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            th = Theme.DARK;
            break;
        default:
            th = Theme.LIGHT;
            break;
        }
        setTheme?.(th);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, th);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
