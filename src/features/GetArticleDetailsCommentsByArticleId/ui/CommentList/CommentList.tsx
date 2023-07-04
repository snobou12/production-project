import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { articleDetailsCommentsReducer } from 'features/GetArticleDetailsCommentsByArticleId/model/slices/articleDetailsCommentsSlice';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import classes from './CommentList.module.scss';
import { IComment } from '../../../../entities/Comment/model/types/comment';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?:IComment[];
    isLoading?:boolean;
}

const reducers:ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const CommentList: FC<CommentListProps> = (props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comment');
    return (
        <DynamicModuleLoader reducers={reducers}>

            <div className={classNames('', {}, [className])}>
                {comments?.length ? comments.map((cmt) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={classes.comment}
                        key={cmt.id}
                        comment={cmt}
                    />
                )) : <Text text={t('comments_are_empty')} />}
            </div>
        </DynamicModuleLoader>
    );
};

export default CommentList;
