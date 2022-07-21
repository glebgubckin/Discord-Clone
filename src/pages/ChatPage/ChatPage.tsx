import { FC, useContext, useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import './chat.scss'
import './chatpage.scss'
import { Context } from '../../main';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
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

  setTitle(chat.currentChat.title || 'Slack')

  const createMessage = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newMessage: ChatMessageType = {
      id: 123234,
      chat_id: Number(chat_id),
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
      </div>
      <div className="chat">
        {
          chat.messages.filter(message => message.chat_id === Number(chat_id)).map(message => <Message key={message.id} id={message.id} chat_id={message.chat_id} author={message.author} text={message.text} />)
        }
      </div>
      <div className="chatpage__textarea">
        <>
          <input
            className="chatpage__input"
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
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
        <button disabled={!message.length} onClick={(e: MouseEvent<HTMLButtonElement>) => createMessage(e)} className="chatpage__sendBtn">Отправить</button>
      </div>
    </div>
  )
}

export default observer(ChatPage)