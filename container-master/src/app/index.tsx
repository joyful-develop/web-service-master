import { useState } from 'react';

import ThemeChanger from '@/features/appTheme/themeSelecter.tsx';

import { AppSettings } from '@features/appSettings/appSettings.js';
// import Content from '@widgets/layout/content/index3.tsx';
// import Footer from '@widgets/layout/footer/index.tsx';
import Header from '@widgets/layout/header/index.tsx';
import SideBar from '@widgets/layout/sideBar/sideBar2.tsx';

function App() {
  const [appTheme] = useState('');
  const [appClass, setAppClass] = useState('');
  const [appDarkMode, setAppDarkMode] = useState(false);
  const [hasScroll] = useState(false);

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

  const maxHeight = 'height_64_60';
  const maxHeightVariants = {
    height_64_60: 'max-h-[calc(100vh-124px)]',
    height_30_60: 'max-h-[calc(100vh-90px)]',
  };

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
      <div className='grid h-screen w-full grid-rows-[auto_1fr_auto]'>
        <div className='h-content max-h-300 w-full bg-black text-white'>
          <Header />
        </div>
        <div className={`grid w-full ${maxHeightVariants[maxHeight]} grid-cols-[auto_1fr_auto]`}>
          <div className='w-content max-w-300 overflow-auto bg-blue-100 text-black'>
            <SideBar />
          </div>
          <div className={`grid w-full ${maxHeightVariants[maxHeight]} grid-rows-[auto_1fr_auto]`}>
            <div className='h-150 overflow-auto bg-yellow-100 text-black'>
              <div>
                SideBar(Top)
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                SideBar(Top)
              </div>
            </div>
            <div className={`bg-dark-3 overflow-auto`}>
              <div>
                <p className='text-dark'>안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.</p>
                <p className='text-black'>안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Contents
              </div>
            </div>
            <div className='h-150 overflow-auto bg-yellow-100 text-black'>
              <div>
                SideBar(Bottom)
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                SideBar(Bottom)
              </div>
            </div>
          </div>
          <div className='w-150 overflow-auto bg-blue-100 text-black'>
            <div>
              <ThemeChanger />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              SideBar(Right)
            </div>
          </div>
        </div>
        <div className='h-60 w-full bg-black text-white'>Footer</div>
      </div>
    </AppSettings.Provider>
  );
}

export default App;
