import { FC } from 'react';
import Channels from './Сhannels'
import './dashboard.scss'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, Navigate } from 'react-router-dom'
import ChatPage from '../../pages/ChatPage/ChatPage'

const DashboardLayout: FC = () => {
  return (
    <div className="dashboard">
      <Channels />
      <Sidebar />
      <Routes>
        <Route path="/project/:project_id/chat/:chat_id" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="/project/1/chat/1" />} />
      </Routes>
    </div>
  )
}

export default DashboardLayout