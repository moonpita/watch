import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../Main/Main';
import Detail from '../detail/detail';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PrivateRoute from '../privateRoute/privateRoute';

const curId = 55;
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}
          element={<Main />}
        />
        <Route path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Detail}
          element={<Detail detailId={curId} authorizationStatus={AuthorizationStatus.Auth} />}
        />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
