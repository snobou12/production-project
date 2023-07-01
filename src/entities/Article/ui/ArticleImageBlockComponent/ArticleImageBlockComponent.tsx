import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block:ArticleImageBlock
}
const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} className={classes.img} alt={block.title} />
            {block.title && <Text text={block.title} />}
        </div>
    );
};

export default memo(ArticleImageBlockComponent);
