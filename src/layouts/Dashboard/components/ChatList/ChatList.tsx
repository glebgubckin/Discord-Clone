import { FC, useState, MouseEvent, useContext, useEffect } from 'react';
import icons from '@entory/ui'
import './chatlist.scss'
import Hashtag from '../../../../components/Hashtag/Hashtag';
import { observer } from 'mobx-react-lite'
import { Context } from '../../../../main';
import Loader from '../../../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

type ChatList = {
  id: number,
  title: string
}

const ChatList: FC = () => {

  const { chat, channel } = useContext(Context)
  const currentChannel = channel.currentChannel
  const navigate = useNavigate()

  const [chatList, setChatList] = useState<ChatList[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setChatList(chat.chats)
    setLoading(false)
  }, [])

  const selectChat = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault()
    navigate(`/project/${currentChannel}/chat/${id}`, { replace: true })
  }

  return (
    <div className="chatlist">
      <div className="chatlist__controllers">
        <label className="chatlist__title">Текстовые чаты</label>
        <button className="chatlist__add">
          <img src={icons.plus} alt="addChat" />
        </button>
      </div>
      {
        loading
        ? <Loader />
        : chatList.map(ch => {
          const currentChat = ch.id === chat.currentChat
          return (
            <div 
              key={ch.id} 
              className="chatlist__item"
              onClick={(e: MouseEvent<HTMLDivElement>) => selectChat(e, ch.id)}
            >
              <Hashtag />
              <p className={`chatlist__subtitle ${ currentChat ? "chatlist__subtitle--active" : ""}`}>{ch.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default observer(ChatList)