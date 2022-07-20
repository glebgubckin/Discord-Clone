import { FC, useContext, useState, ChangeEvent } from 'react';
import './chat.scss'
import './chatpage.scss'
import { Context } from '../../main';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import icons from '@entory/ui';
import Hashtag from '../../components/Hashtag/Hashtag';
import Message from './components/Message';
import setTitle from '../../lib/utils/setTitle';
import ChatMessageType from "../../types/pages/ChatMessageType";

const ChatPage: FC = () => {

  const [message, setMessage] = useState<string>("")
  const { channel, chat, user } = useContext(Context)
  const { project_id , chat_id} = useParams()
  channel.setCurrentChannel(Number(project_id))
  chat.setCurrentChat(Number(chat_id))

  setTitle(chat.currentChat.title || 'Entory')

  const createMessage = (e: any) => {
    e.preventDefault()
    const newMessage: ChatMessageType = {
      id: 123234,
      author: user.fullName,
      text: message,
      timeStamp: '123'
    }
    chat.addMessage(newMessage)
    setMessage('')
  }

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
        {
          chat.messages.map(message => <Message key={message.id} id={message.id} author={message.author} text={message.text} />)
        }
      </div>
      <div className="chatpage__textarea">
        <>
          <input
            className="chatpage__input"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                createMessage(e)
              }
            }}
            value={message}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            placeholder="Напишите сообщение..."
          />
          <div className="chatpage__controls">

          </div>
        </>
        <button disabled={!message.length} onClick={(e: any) => createMessage(e)} className="chatpage__sendBtn">Отправить</button>
      </div>
    </div>
  )
}

export default observer(ChatPage)