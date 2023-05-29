import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options:BuildOptions):DevServerConfiguration {
    return {
        port: options.port,
        // автоматическое открытие страницы в браузере
        open: true,
        // можно проксировать запросы через index page(корневую страницу) /about, /...
        historyApiFallback: true,
        // Чтобы страница не переобновлялась + нужен plugin  HotModuleReplacementPlugin()
        hot: true,
    };
}
