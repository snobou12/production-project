
import { FC, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import "./styles/index.scss";

const App: FC = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
