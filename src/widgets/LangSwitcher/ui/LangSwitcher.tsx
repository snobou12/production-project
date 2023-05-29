import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}
const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(classes.langSwitcher, {}, [className])}
        >
            {t('current_language')}
        </Button>
    );
};

export default LangSwitcher;
