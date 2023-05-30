import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}
const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
