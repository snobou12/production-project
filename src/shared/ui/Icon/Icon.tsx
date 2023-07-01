import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg:React.FC<React.SVGProps<SVGSVGElement>>
}
const Icon: FC<IconProps> = (props) => {
    const { className, Svg } = props;
    return (
        <Svg className={classNames(classes.Icon, {}, [className])} />
    );
};

export default Icon;
