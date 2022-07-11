import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import user from './store/UserStore'
import './index.scss'

export const Context = React.createContext({user})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{user}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
