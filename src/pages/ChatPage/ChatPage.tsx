import { FC, useContext } from 'react';
import './chatpage.scss'
import { Context } from '../../main';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ChatPage: FC = () => {

  const { channel, chat } = useContext(Context)

  const { project_id , chat_id} = useParams()
  channel.setCurrentChannel(Number(project_id))
  chat.setCurrentChat(Number(chat_id))

  return (
    <div className="chatpage">
      
    </div>
  )
}

export default observer(ChatPage)