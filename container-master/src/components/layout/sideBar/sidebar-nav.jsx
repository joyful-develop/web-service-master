import React from 'react';
import { NavLink } from 'react-router-dom';

// import { AppSettings } from '@/appSettings.js';

function SidebarNav() {
  return (
    <div className='menu'>
      <div className='menu-header'>Navigation</div>
      <NavLink className='menu-link' to='/'>
        Home
      </NavLink>
      <NavLink className='menu-link' to='/userSetting'>
        UserSetting
      </NavLink>
      <NavLink className='menu-link' to='/dashBoard'>
        DashBoard
      </NavLink>
    </div>
  );
}

export default SidebarNav;
