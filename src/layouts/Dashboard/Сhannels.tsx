import { FC } from 'react'
import { Link } from 'react-router-dom'
import icons from '@entory/ui'
import ChannelIcon from './components/ChannelIcon'

const Сhannels: FC = () => {

  console.log(icons.notification_on)

  return (
    <div className="channels">
      <div className="channels__wrapper">
        <ChannelIcon title="🤖" />
        <ChannelIcon title="💎" />
        <ChannelIcon title="🍓" />
        <ChannelIcon title="🗿" />
      </div>
      <div className="channels__settings">
        <div className="channels__settings__btn">
          <img className="channels__settings__img" src={icons.notification_on} alt="" />
        </div>
        <Link className="channels__settings__btn" to="/settings">
          <img className="channels__settings__img" src={icons.settings} alt="" />
        </Link>
        <div className="channels__divider" />
        <div className="channels__settings__btn">
          <img className="channels__settings__img" src={icons.user} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Сhannels