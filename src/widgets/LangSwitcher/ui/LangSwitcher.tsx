import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
	className?: string;
    short?:boolean
}
const LangSwitcher: FC<LangSwitcherProps> = memo((props:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const { className, short } = props;
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames(className, {}, [])}
        >
            {short ? t('short_lang') : t('current_language')}
        </Button>
    );
});

export default LangSwitcher;
