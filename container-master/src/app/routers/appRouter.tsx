import React from 'react';

import Layout from '@app/Layout.tsx';
import DashBoardHome from '@pages/dashBoard/DashBoard.tsx';
import UserSetting from '@pages/userSetting/UserSetting.tsx';

const DashBoard = React.lazy(() => import('remoteApp/DashBoard'));

const AppRoute = [
  {
    path: '*',
    element: <Layout />,
    children: [
      { path: '', element: <DashBoardHome /> },
      { path: 'userSetting', element: <UserSetting /> },
      { path: 'dashBoard', element: <DashBoard /> },
    ],
  },
];

export default AppRoute;
