import { FC, useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import api from './lib/api/index'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import { Context } from './main'
import { observer } from 'mobx-react-lite'

const App: FC = () => {

  const { user } = useContext(Context)

  return (
    <Router>
      {
        !user.isAuth && <AuthLayout />
      }
    </Router>
  )
}

export default observer(App)