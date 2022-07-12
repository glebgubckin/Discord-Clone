import { FC, useContext, useState, ChangeEvent } from 'react';
import './chat.scss'
import './chatpage.scss'
import { Context } from '../../main';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import icons from '@entory/ui';
import Hashtag from '../../components/Hashtag/Hashtag';
import Message from './components/Message';

const ChatPage: FC = () => {

  const [message, setMessage] = useState<string>("")
  const { channel, chat } = useContext(Context)
  const { project_id , chat_id} = useParams()
  channel.setCurrentChannel(Number(project_id))
  chat.setCurrentChat(Number(chat_id))

  return (
    <div className="chatpage">
      <div className="chatpage__header">
        <span className="chatpage__title">
          <Hashtag color="#fff" />
          <p>{chat.chats[0].title}</p>
        </span>
        <div className="chatpage__controls">
          <button className="chatpage__controls__btn">
            <img src={icons.search} alt="search" />
          </button>
        </div>
      </div>
      <div className="chat">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chatpage__textarea">
        <>
          <input
            className="chatpage__input"
            value={message}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            placeholder="Напишите сообщение..."
          />
          <div className="chatpage__controls">

          </div>
        </>
        <button className="chatpage__sendBtn">Отправить</button>
      </div>
    </div>
  )
}

export default observer(ChatPage)