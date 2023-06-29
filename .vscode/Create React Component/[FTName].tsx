import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import classes from "./[FTName].module.scss";
interface [FTName]Props {
    className?: string;
}
const [FTName]: FC<[FTName]Props> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(classes.[FTName], {}, [className])}></div>
    );
};

export default [FTName];
