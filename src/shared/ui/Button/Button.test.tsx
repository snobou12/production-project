import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('have button', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('button have class clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
