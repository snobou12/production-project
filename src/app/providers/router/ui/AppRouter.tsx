import {
    FC, Suspense, memo, useMemo,
} from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter: FC = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if ((route.authOnly && !isAuth?.id) || (route.authOnly && !isAuth?.username)) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
