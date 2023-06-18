import { FC } from 'react';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('main_page_title')}
            <Counter />
        </div>
    );
};

export default MainPage;
