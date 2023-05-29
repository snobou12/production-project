// Это и есть public api, регулирует то, что отдаем наружу
import ThemeProvider from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';
import { Theme } from './lib/ThemeContext';

export { ThemeProvider, useTheme, Theme };
