import { FC, useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import api from './lib/api/index'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import { Context } from './main'
import { observer } from 'mobx-react-lite'

const history = createBrowserHistory({ window })

const App: FC = () => {

  const { user } = useContext(Context)

  return (
    <HistoryRouter history={history}>
      {
        user.isAuth && null
      }
      {
        !user.isAuth && <AuthLayout />
      }
    </HistoryRouter>
  )
}

export default observer(App)