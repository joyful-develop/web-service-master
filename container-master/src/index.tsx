import '@app/styles/index.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import AppRouter from '@app/routers/appRouter.tsx';

const container = document.getElementById('root')!;
const root = createRoot(container);
function App() {
  const element = useRoutes(AppRouter);

  return element;
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
