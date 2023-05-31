import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// делаем это для сторибука, чтобы работали стили, переопределяем в общем конфиг вебпака для сторибука
export function buildCssLoader(isDev:boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS + module.[s]css
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // чтобы работало и для модулей и для просто style.scss
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),

                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
