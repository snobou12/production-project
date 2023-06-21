import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen:boolean;
    onClose:()=>void;

}
const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy className={classNames('', {}, [className])}>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
