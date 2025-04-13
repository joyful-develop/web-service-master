// import { useState } from 'react';

// import reactLogo from './assets/react.svg';

// import viteLogo from '/vite.svg';
// import './App.css';

// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
// import Layout from './components/layout/Layout.tsx';
// import DashBoard from './pages/dashBoard/DashBoard.tsx';
// import UserSetting from './pages/userSetting/UserSetting.tsx';
import { RouterProvider } from 'react-router-dom';
import routerComponent from './components/routing/routers.tsx';
import { useTestStore } from './store/useTestStore.ts';

function App() {
  // const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <div>
  //       <a href='https://vite.dev' target='_blank'>
  //         <img src={viteLogo} className='logo' alt='Vite logo' />
  //       </a>
  //       <a href='https://react.dev' target='_blank'>
  //         <img src={reactLogo} className='logo react' alt='React logo' />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className='card'>
  //       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
  //   </>
  // );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Layout />} />
  //       <Route path='/dashBoard' element={<DashBoard />} />
  //       <Route path='/userSetting' element={<UserSetting />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
  const increasePopulation = useTestStore((state) => state.increasePopulation);
  const bears = useTestStore((state) => state.bears);

  return (
    <>
      <div>
        {/* react-router */}
        <RouterProvider router={routerComponent()} />
        <div>
          <a href={'/'}>HOME</a>
        </div>
        <div>
          <h3>메뉴1</h3>
          <a href={'/dashBoard'}>데이보드</a>
          <br />
          <a href={'/userSetting'}>설정정</a>
        </div>
      </div>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
    </>
  );
}

export default App;
