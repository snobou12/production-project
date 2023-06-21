import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import Loader from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen:boolean;
    onClose:()=>void;

}
const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>

    );
};

export default LoginModal;
