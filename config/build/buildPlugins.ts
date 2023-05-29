import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // Создаем экзмпеляры класса через new, чтобы был обьект
        // HTMLWebpackPlugin - создает HTML-файл для нашего приложения и автоматически внедряет в этот файл все созданные вами пакеты
        // new webpack.ProgressPlugin - показывает сколько процентов сборки произшло
        // MiniCssExtractPlugin - из js-scss,css в css
        // webpack.DefinePlugin - можем env передавать на клиент(в приложение)
        // webpack.HotModuleReplacementPlugin - чтобы не обновлялась страница при не серьезных изменениях
        // ReactRefreshWebpackPlugin дополнение к выше плагину для React
        new HTMLWebpackPlugin({
            // создаем шаблон
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
