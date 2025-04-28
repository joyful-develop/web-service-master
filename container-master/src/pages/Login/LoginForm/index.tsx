// import { Auth, Origin } from 'features';
// import React, { lazy, useEffect } from 'react';
// import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
// import { dom } from 'shared/helpers';

// const HomePage = lazy(() => import('./home'));
// const RepositoryPage = lazy(() => import('./repository'));
// const UserPage = lazy(() => import('./user'));
// const SearchPage = lazy(() => import('./search'));
// const AuthPage = lazy(() => import('./auth'));

// const useResetScrollAtEveryPage = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       dom.scrollToTop();
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);
// };

// const Routing = () => {
//   const { isAuth, viewer } = Auth.useAuth();
//   useResetScrollAtEveryPage();

//   if (!isAuth) {
//     return (
//       <Switch>
//         <Route exact path={Auth.routes.main} component={HomePage} />
//         <Route exact path={Auth.routes.login} component={AuthPage} />
//         <Redirect to={Auth.routes.login} />
//       </Switch>
//     );
//   }
//   return (
//     <>
//       <Origin />
//       <Switch>
//         <Route exact path='/search' component={SearchPage} />
//         <Route exact path='/:username' component={UserPage} />
//         <Route path='/:username/:repository/:branch(tree/[\w\d-_./]+)?' component={RepositoryPage} />
//         <Redirect to={`/${viewer?.username}`} />
//       </Switch>
//     </>
//   );
// };

// export default Routing;
