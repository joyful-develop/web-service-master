import { Link } from 'react-router-dom';

import { AppSettings } from '@features/appSettings/appSettings.js';

import style from './style.ts';

function Header() {
  return (
    <AppSettings.Consumer>
      {({ toggleAppSidebarEndMobile, appHeaderInverse }) => (
        <div id='header' className={'bg-red-200 pt-80'} data-bs-theme={appHeaderInverse ? 'dark' : ''}>
          <div className='mix-w-md flex w-220 min-w-100 items-center'>
            <button type='button' className='navbar-mobile-toggler' onClick={toggleAppSidebarEndMobile}>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className={`${style.flexCenter}`}>
              <span className='text-18'></span> <b>Color</b> Admin
            </Link>
          </div>
        </div>
      )}
    </AppSettings.Consumer>
  );
}

export default Header;
