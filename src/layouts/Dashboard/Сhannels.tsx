import { FC, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import icons from '@entory/ui'
import ChannelIcon from './components/ChannelIcon'
import Channel from 'types/store/ChannelStoreTypes';
import { Context } from '../../main';
import Loader from '../../components/Loader/Loader';

const Сhannels: FC = () => {

  const { channel } = useContext(Context)

  const [channels, setChannels] = useState<Channel[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setChannels(channel.channels)
    setLoading(false)
  }, [])

  return (
    <div className="channels">
      <div className="channels__wrapper">
        {
          loading
          ? <Loader />
          : channels.map(channel => <ChannelIcon key={channel.id} id={channel.id} title={channel.title} />)
        }
      </div>
      <div className="channels__settings">
        <div className="channels__settings__btn">
          <img className="channels__settings__img" src={icons.notification} alt="" />
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