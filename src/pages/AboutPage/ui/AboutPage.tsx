import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about-page-title')}
            <span>kek</span>
        </div>
    );
};

export default AboutPage;
