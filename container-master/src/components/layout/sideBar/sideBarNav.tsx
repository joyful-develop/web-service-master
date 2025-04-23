import { NavLink } from 'react-router-dom';

// import { AppSettings } from '@/appSettings.js';

function SidebarNav() {
  return (
    <div className='menu'>
      <div className='menu-header'>Navigation</div>
      <br />
      <NavLink className='menu-link' to='/dashBoardHome'>
        Home
      </NavLink>
      <br />
      <NavLink className='menu-link' to='/userSetting'>
        UserSetting
      </NavLink>
      <br />
      <NavLink className='menu-link' to='/dashBoard'>
        DashBoard
      </NavLink>
      <br />
    </div>
  );
}

export default SidebarNav;
