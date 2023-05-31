import type { Preview } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global them for app',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', title: 'Light' },
                { value: 'dark', title: 'Dark' },
            ],
        },
        showName: true,
        dynamicTitle: true,
    },
};

export default preview;
