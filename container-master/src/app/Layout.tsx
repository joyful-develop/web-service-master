import { useEffect, useState } from 'react';

import { AppSettings } from '@features/appSettings/appSettings.js';
import Content from '@widgets/layout/content/index3.tsx';
import Footer from '@widgets/layout/footer/index.tsx';
import Header from '@widgets/layout/header/index.tsx';
import SideBar from '@widgets/layout/sideBar/sideBar2.tsx';

function Layout() {
  const [appTheme] = useState('');
  const [appClass, setAppClass] = useState('');
  const [appDarkMode, setAppDarkMode] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  const handleSetAppClass = (value: string) => {
    setAppClass(value);
  };

  const handleSetAppDarkMode = (value: boolean) => {
    if (value === true) {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'dark');
    } else {
      document.querySelector('html')?.removeAttribute('data-bs-theme');
    }
    setAppDarkMode(value);
    if (localStorage) {
      localStorage.appDarkMode = value;
    }
    document.dispatchEvent(new Event('theme-reload'));
  };

  const handleSetAppTheme = (value: string) => {
    const newTheme = 'theme-' + value;
    for (let x = 0; x < document.body.classList.length; x++) {
      if (document.body.classList[x].indexOf('theme-') > -1 && document.body.classList[x] !== newTheme) {
        document.body.classList.remove(document.body.classList[x]);
      }
    }
    document.body.classList.add(newTheme);

    if (localStorage && value) {
      localStorage.appTheme = value;
    }
    document.dispatchEvent(new Event('theme-reload'));
  };

  useEffect(() => {
    handleSetAppTheme(appTheme);
    if (appDarkMode) {
      handleSetAppDarkMode(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
      const elm = document.getElementsByClassName('nvtooltip');
      for (let i = 0; i < elm.length; i++) {
        elm[i].classList.add('d-none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [appTheme, appDarkMode]);

  return (
    <AppSettings.Provider
      value={{
        appTheme,
        appClass,
        appDarkMode,
        hasScroll,
        handleSetAppClass,
        handleSetAppDarkMode,
        handleSetAppTheme,
      }}>
      <div>
        <Header />
        <div className='flex'>
          <SideBar />
          <Content />
        </div>
        <Footer />
      </div>
    </AppSettings.Provider>
  );
}

export default Layout;
