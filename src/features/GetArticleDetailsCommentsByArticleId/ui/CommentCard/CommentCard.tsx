import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IComment } from 'entities/Comment/model/types/comment';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import AppLink from 'shared/ui/AppLink/AppLink';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment:IComment;
    isLoading?:boolean
}
const CommentCard: FC<CommentCardProps> = (props) => {
    const { className, isLoading, comment } = props;
    if (isLoading) {
        return (
            <div className={classNames(classes.CommentCard, {}, [className, classes.NotBordered])}>
                <div className={classes.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={classes.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={classes.text}
                />
            </div>

        );
    }
    return (
        <div className={classNames(classes.CommentCard, {}, [className])}>
            <AppLink to={`/profile/${comment.user.id}`} className={classes.header}>
                {comment.user.avatar && (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                )}
                <Text
                    className={classes.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={classes.text}
                text={comment.text}
            />
        </div>
    );
};

export default CommentCard;
