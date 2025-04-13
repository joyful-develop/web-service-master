import { Link } from 'react-router-dom';

const Layout = () => {
  // const id = 'angel';

  return (
    <div id='display'>
      <div className='container'>
        <h1>Landing</h1>

        <Link to='dashBoard'>dashBoard</Link>
        <br />
        <Link to='userSetting'>userSetting</Link>
      </div>
    </div>
  );
};

export default Layout;
