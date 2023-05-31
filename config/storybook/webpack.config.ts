import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

// Переопределяем webpack config для storybook'а
export default ({ config }:{config:webpack.Configuration}) => {
    const paths:BuildPaths = {
        build: '',
        html: '',
        entry: {},
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);

    config.module.rules.push(buildCssLoader(true));
    // config.resolve.extensions.push('.ts',".tsx")
    return config;
};
