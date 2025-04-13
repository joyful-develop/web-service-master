import { createBrowserRouter } from 'react-router-dom';
import DashBoard from '../../pages/dashBoard/DashBoard.tsx';
import UserSetting from '../../pages/userSetting/UserSetting.tsx';

function routerComponent() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashBoard />,
    },
    {
      path: '/dashBoard',
      element: <DashBoard />,
    },
    {
      path: '/userSetting',
      element: <UserSetting />,
    },
  ]);

  return router;
}

export default routerComponent;
