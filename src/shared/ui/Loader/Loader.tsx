import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}
const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(classes['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
