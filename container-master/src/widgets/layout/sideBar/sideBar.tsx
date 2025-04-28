import React from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { AppSettings } from '@/features/appSettings/appSettings.js';

import SidebarNav from './sideBarNav.tsx';

function Sidebar() {
  return (
    <AppSettings.Consumer>
      {({ appSidebarTransparent, appSidebarGrid, appSidebarLight }) => (
        <React.Fragment>
          <div
            id='sidebar'
            className={
              'app-sidebar ' +
              (appSidebarTransparent ? 'app-sidebar-transparent' : '') +
              (appSidebarGrid ? 'app-sidebar-grid' : '')
            }
            data-bs-theme={appSidebarLight ? '' : 'dark'}>
            <PerfectScrollbar className='app-sidebar-content' options={{ suppressScrollX: true }}>
              <SidebarNav />
            </PerfectScrollbar>
          </div>
        </React.Fragment>
      )}
    </AppSettings.Consumer>
  );
}

export default Sidebar;
