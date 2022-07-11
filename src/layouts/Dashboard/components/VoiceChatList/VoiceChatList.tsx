import { FC, useState, useEffect, MouseEvent, useContext } from 'react';
import icons from '@entory/ui'
import './voicechatlist.scss'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../../main';

type VoiceChatList = {
  id: number,
  title: string
}

const VoiceChatList: FC = () => {

  const { chat } = useContext(Context)

  const [voiceChatList, voiceSetChatList] = useState<VoiceChatList[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    voiceSetChatList(chat.voiceChats)
    setLoading(false)
  }, [])

  const selectChat = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault()
    console.log(id)
  }

  return (
    <div className="voiceChatlist">
      <div className="voiceChatlist__controllers">
        <label className="voiceChatlist__title">Голосовые чаты</label>
        <button className="voiceChatlist__add">
          <img src={icons.plus} alt="addChat" />
        </button>
      </div>
      {
        voiceChatList.map(chat => {
          return (
            <div 
              key={chat.id} 
              className="voiceChatlist__item"
              onClick={(e: MouseEvent<HTMLDivElement>) => selectChat(e, chat.id)}
            >
              <img src={icons.volume} alt="" />
              <p className="voiceChatlist__subtitle">{chat.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default observer(VoiceChatList)