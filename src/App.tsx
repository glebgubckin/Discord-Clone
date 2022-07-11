import { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import api from './lib/api/index'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

const App: FC = () => {

  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <Router>
      {
        !isAuth && <AuthLayout />
      }
    </Router>
  )
}

export default App