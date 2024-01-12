import Layout from '../components/Layout';
import { ROUTES } from '../enums/routesEnums';
import CreateSessionPage from '../pages/CreateSessionPage';
import GamePage from '../pages/GamePage';
import Home from '../pages/Home';

export const routes = [
    {
        path: ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />
            },
            {
                path: ROUTES.CREATE_SESSION,
                element: <CreateSessionPage/>
            },
            {
                path: ROUTES.GAME,
                element: <GamePage/>
            }
        ]
    }
]