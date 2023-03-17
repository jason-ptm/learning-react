import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'
import { PrivateRoutes, PublicRoutes } from './model'
import store from './redux/store'
import { Provider } from 'react-redux'
import { AuthGuard } from './guards'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="" element={<Navigate to={PublicRoutes.LOGIN} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route
                path="*"
                element={<Navigate to={PublicRoutes.LOGIN} replace={true} />}
              />
            </Routes>
          </Router>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
