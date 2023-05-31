import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
export default StyleDecorator;
