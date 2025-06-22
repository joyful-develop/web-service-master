import { Route as rootRoute } from './routes/__root';

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();
