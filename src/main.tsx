import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

export const Context = React.createContext({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
