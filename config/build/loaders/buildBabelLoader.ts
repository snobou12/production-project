import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }:BuildOptions) {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        // Экстрактор нужен, для того что бы не писать ключи руками. Он сам извлекает,
                        //  а потом переводчик например проходится по этим ключам и делает переводы.
                        // Тем самым разработчик вообще никак не взаимодействует с переводами и ключами
                        // но сырая штука!!
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            // Не только вытаскивает ключи из кода, но и автоматически подставляет ключ,

                            keyAsDefaultValue: true,
                        },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
