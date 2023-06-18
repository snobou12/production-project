import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonTheme } from './Button';
// import ThemeDecorator from "../../config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from '../../../app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default:Story = {
    args: {
        children: 'Text',
    },
};

export const Clear:Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline:Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
