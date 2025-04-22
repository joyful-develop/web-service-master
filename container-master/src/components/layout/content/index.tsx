import { Outlet } from 'react-router-dom';

import { AppSettings } from '@/appSettings.js';

function Content() {
  return (
    <AppSettings.Consumer>
      {({ appContentClass }) => (
        <div className={'app-content ' + appContentClass}>
          <Outlet />
        </div>
      )}
    </AppSettings.Consumer>
  );
}

export default Content;
