import { FC, useState } from 'react';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './MainPage.module.scss';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(classes.MainPage, {}, [])}>
            {t('main_page_title')}
            <Counter />
        </div>
    );
};

export default MainPage;
