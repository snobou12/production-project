import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?:HTMLElement;
}
const Portal: FC<PortalProps> = (props) => {
    // children - что, element(контейнер) - куда. Хорошая вещь для модалок, тултипов, toasts
    const { children, element = document.body } = props;
    return createPortal(children, element);
};

export default Portal;
