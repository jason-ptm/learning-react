import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes } from '../../model'
import { Logout } from '../../components/Logout'
export interface PrivateProps {
  props?: unknown
}

const DashBoard = lazy(() => import('./components/DashBoard/DashBoard'))
const Menu = lazy(() => import('./components/Menu/Menu'))

const Private: React.FC<PrivateProps> = () => {
  return (
    <>
      <Routes>
        <Route path={PrivateRoutes.DASHBOARD} element={<DashBoard />} />
        <Route path={PrivateRoutes.MENU} element={<Menu />} />
        <Route
          path="*"
          element={<Navigate to={PrivateRoutes.DASHBOARD} replace={true} />}
        />
      </Routes>
      <Logout />
    </>
  )
}

export default Private
