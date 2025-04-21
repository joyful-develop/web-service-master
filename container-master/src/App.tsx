import { RouterProvider } from 'react-router-dom';

import routerComponent from './components/routing/routers.tsx';
import { useTestStore } from './store/useTestStore.ts';

function App() {
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
      {/* <div className={`${styles.flexCenter} ${styles.responsive} font-spoqa bg-gray-500}`> */}
      <h1>{bears} around here...</h1>
      <button
        className='font-spoqaBold h-[68px] w-[220px] rounded-[5px] text-[24px] text-white'
        onClick={increasePopulation}>
        one up
      </button>
    </>
  );
}

export default App;
