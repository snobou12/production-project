/** @format */

import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
interface SideBarProps {
	className?: string;
}
const SideBar: FC<SideBarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div
			className={classNames(
				classes.sidebar,
				{ [classes.collapsed]: collapsed },
				[className]
			)}
		>
			<button onClick={onToggle}>toggle</button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={classes.lang} />
			</div>
		</div>
	);
};

export default SideBar;
