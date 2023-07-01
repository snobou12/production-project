import {
    FC, Suspense, memo, useCallback, useMemo,
} from 'react';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter: FC = () => {
    // можно прикрутить что угодно
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                element={route.authOnly ? (
                    <RequireAuth>
                        {element}
                    </RequireAuth>
                ) : element}
                path={route.path}
            />
        );
    }, []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
