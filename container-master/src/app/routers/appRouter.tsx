import React from 'react';

import App from '@/app/index2.tsx';

import DashBoardHome from '@pages/dashBoard/DashBoard.tsx';
import UserSetting from '@pages/userSetting/UserSetting.tsx';

const DashBoard = React.lazy(() => import('remoteApp/DashBoard'));

const AppRoute = [
  {
    path: '*',
    element: <App />,
    children: [
      { path: '', element: <DashBoardHome /> },
      { path: 'userSetting', element: <UserSetting /> },
      { path: 'dashBoard', element: <DashBoard /> },
    ],
  },
];

export default AppRoute;
