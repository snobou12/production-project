import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?:string;
    size?:number;

}
const Avatar: FC<AvatarProps> = (props) => {
    const { className, src = '', size = 100 } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,

    }), [size]);
    return (
        <img style={styles} src={src} className={classNames(classes.Avatar, {}, [className])} alt="avatar" />
    );
};

export default Avatar;
