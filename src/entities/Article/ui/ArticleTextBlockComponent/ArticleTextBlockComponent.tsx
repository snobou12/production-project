import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import classes from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}
const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            {block.title && <Text title={block.title} className={classes.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={classes.paragraph} />
            ))}

        </div>
    );
};

export default memo(ArticleTextBlockComponent);
