import { FC } from 'react'
import Channels from './Сhannels'
import './dashboard.scss'

const DashboardLayout: FC = () => {
  return (
    <div className="dashboard">
      <Channels />
    </div>
  )
}

export default DashboardLayout