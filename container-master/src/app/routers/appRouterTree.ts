import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute]);
