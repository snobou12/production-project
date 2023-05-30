module.exports = {
    env: {
        browser: true,
        es2021: true,
        // для jest describe и тд.., чтобы не ругался
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    // 'i18next' плагин, чтобы показывал все не переведенные слова (t(""))
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-tabs': ['error', { allowIndentationTabs: true }],
        // [2,4]- [1 - warning 2-off, 3 - error, 4 - количество пробелов]
        'react/jsx-indent': [2, 4],
        // отступы для пропсов в компонент
        'react/jsx-indent-props': [2, 4],
        // для обычного кода
        indent: [2, 4],
        // Разрешение на js,jsx,tsx
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        // отключить правило для абсолютных путей
        'import/no-unresolved': 'off',
        // для именнованного экспорта
        'import/prefer-default-export': 'off',
        // нигде не использована переменная, варнинг
        'no-unused-vars': 'warn',
        // если в ts прописать ?, то будет ругаться, что нет дефолтного значения, отключаем
        'react/require-default-props': 'off',
        // используем jsx, но не импортировали реакт, отключаем
        'react/react-in-jsx-scope': 'off',
        // использование спред для пропсов-плохо, но не для ui компнонетов, оберток, поэтому warn
        'react/jsx-props-no-spreading': 'warn',
        // для стрелочных функций
        'react/function-component-definition': 'off',
        // для enum, странная ошибка
        'no-shadow': 'off',
        // так как нет расширений, отключаем, вебпак настроен
        'import/extensions': 'off',
        // импорт dev зависимости, но так как  файл для сборки, то отключим
        'import/no-extraneous-dependencies': 'off',
        // нижние подчеркивания __IS_DEV__
        'no-underscore-dangle': 'off',
        // Чтобы можно было писать куча кода в строку(только для комментариев желательно сделать в будущем)
        'max-len': ['error', { code: 400 }],
        // чтобы не было ошибки на счет типа button
        'react/button-has-type': [0],
        // ругаться отсутствия перевода только в jsx
        // 'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
    // чтобы не ругался на обьявление isDev из env
    globals: {
        __IS_DEV__: true,
    },
};
