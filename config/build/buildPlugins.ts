import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    // Создаем экзмпеляры класса через new, чтобы был обьект
    // HTMLWebpackPlugin - создает HTML-файл для нашего приложения и автоматически внедряет в этот файл все созданные вами пакеты
    // new webpack.ProgressPlugin - показывает сколько процентов сборки произшло
    // MiniCssExtractPlugin - из js-scss,css в css
    // webpack.DefinePlugin - можем env передавать на клиент(в приложение)
    // webpack.HotModuleReplacementPlugin - чтобы не обновлялась страница при не серьезных изменениях
    // ReactRefreshWebpackPlugin дополнение к выше плагину для React
    // BundleAnalyzerPlugin анализируем бандл(очень удобно), но для ci/cd отключать, иначе infinity загрузка при билде
    const plugins = [
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
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugins;
}
