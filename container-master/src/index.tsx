import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import AppRouter from '@components/routing/appRouter.tsx';

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
