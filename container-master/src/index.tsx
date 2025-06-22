import '@app/styles/index.css';
// import { BrowserRouter, useRoutes } from 'react-router-dom';

import React from 'react';

import ReactDOM from 'react-dom/client';

// import AppRouter from '@app/routers/appRouter.tsx';
import { Spinner } from '@sharded/Spinner.tsx';
import { ErrorComponent, RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen.ts';

// const container = document.getElementById('root')!;
// const root = createRoot(container);
// function App() {
//   const element = useRoutes(AppRouter);

//   return element;
// }

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner />
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
});

// const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
