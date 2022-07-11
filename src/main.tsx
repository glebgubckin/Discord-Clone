import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import user from './store/UserStore'
import chat from './store/ChatStore'
import channel from './store/ChannelStore'
import './index.scss'

export const Context = React.createContext({user, chat, channel})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{user, chat, channel}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
