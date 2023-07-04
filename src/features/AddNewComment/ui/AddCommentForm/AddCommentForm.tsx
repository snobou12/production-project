import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { getAddCommentFormError, getAddCommentFormLoading, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { sendComment } from '../../model/services/sendComment/sendComment';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}
const reducers:ReducersList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { t } = useTranslation('comment');
    const dispatch = useAppDispatch();
    const { className } = props;
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const isLoading = useSelector(getAddCommentFormLoading);
    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendComment = useCallback(() => {
        dispatch(sendComment());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(classes.AddCommentForm, {}, [className])}>
                <Input className={classes.input} value={text} onChange={onCommentTextChange} placeholder={t('new_comment_placeholder')} />
                <Button onClick={onSendComment}>{t('new_comment_btn')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
