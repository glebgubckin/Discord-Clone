import { FC, MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../main';
import { observer } from 'mobx-react-lite';

type ChannelIconProps = {
  id: number;
  title: string
}


const ChannelIcon: FC<ChannelIconProps> = ({id, title}) => {

  const { channel, chat } = useContext(Context)

  const navigate = useNavigate()
  const currentChannel = id === channel.currentChannel.id
  const currentChat = chat.chats.filter(chat => {
    return chat.channel_id === id
  })[0]?.id

  const setChannel = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    navigate(`/project/${id}/chat/${currentChat || 0}`, { replace: true })
  }

  return (
    <div onClick={setChannel} className={`channels__icon ${currentChannel ? 'channels__icon--active' : ''}`}>
      {title}
      {
        currentChannel
        ? <div className="channels__dot" />
        : <></>
      }
    </div>
  )
}

export default observer(ChannelIcon)