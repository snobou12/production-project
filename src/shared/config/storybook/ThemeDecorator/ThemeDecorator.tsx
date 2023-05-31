import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
    const { globals: { theme } } = context;
    return (
        <ThemeProvider>
            <div className={classNames('app', {}, [theme])}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
export default ThemeDecorator;
