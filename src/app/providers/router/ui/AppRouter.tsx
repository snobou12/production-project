import { FC, Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={<div className="page-wrapper">{element}</div>}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
