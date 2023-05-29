/** @format */

import { FC, useState, useMemo, ReactNode } from "react";
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from "../lib/ThemeContext";

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IProps {
	children?: ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	// чтобы не создавался новый обьект постоянно, мемоизировать значения обьектов, массивов. только если theme  изменился
	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
