import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    // svg
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };
    // png jpg jpeg gif woff2 woff
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    // Если использовали бы js, то пришлось добавить babel-loader, специальный транспилятор для того, чтобы js работал во всех старых браузерах
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    // css,scss,scss modules
    const styleLoader = buildCssLoader(isDev);

    // для использования других фич, babel - транспилятор для старых браузеров, из ecma2015 в <,
    // ~~~кстати если бы не юзали typescirpt, то он бы нужен был в любой случае + babel-react presets нужен был бы~~~
    // Кидать строго до typescriptLoader
    const babelLoader = buildBabelLoader(options);

    return [babelLoader, typescriptLoader, styleLoader, svgLoader, fileLoader];
}
