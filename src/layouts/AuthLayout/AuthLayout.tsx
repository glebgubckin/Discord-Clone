import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes } from '../../pages'
import './auth.scss'

const AuthLayout: FC = () => {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h1 className="auth__title">Slack</h1>
        <Routes>
          {
            authRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)
          }
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <p className="auth__footer">© Slack</p>
      </div>
      <div className="auth__side"></div>
    </div>
  )
}

export default AuthLayout