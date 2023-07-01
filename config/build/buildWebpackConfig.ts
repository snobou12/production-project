import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

// path.resolve - склеить участки путей, __dirname - там где мы находимся(корень) +, участки путей
export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        // mode - production,development, production - минифицирует все файлы
        mode,
        // entry Стартовая точка приложения, можно выбрать в обеьекте ключом название [name]

        entry: paths.entry,
        // rules - конфигурируем лоудеры, лоудеры обрабатывают файлы, которые выходят за рамки js, css,png,jpeg,scss,ts,jsx,tsx
        // test : регулярное выражения для принимаемого файла ts,tsx
        // use: пишет лоудер
        // исключаем node_modules, чтобы обрабатывать его
        module: {
            rules: buildLoaders(options),
        },

        // output куда и как будет называться, [contenthash] - добавляет id на основе кода внутри, clean - убирает все раннее созданные чанки
        // publicPath для page/:id path
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        // plugins - массив обьектов - плагинов:
        plugins: buildPlugins(options),

        // resolve в extensions указываем расширения, которые при импорте мы не будем указывать .extensions
        resolve: buildResolvers(options),
        // в какой файле, функции, где произошла ошибка, чтобы можно было определить по стек трейсу(hash map в работе) (только в dev моде естес)
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
