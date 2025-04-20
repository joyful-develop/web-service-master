import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import DashBoardHome from '@pages/dashBoard/DashBoard.tsx';
import UserSetting from '@pages/userSetting/UserSetting.tsx';
const DashBoard = React.lazy(() => import('remoteApp/DashBoard'));

function routerComponent() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DashBoardHome />,
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
