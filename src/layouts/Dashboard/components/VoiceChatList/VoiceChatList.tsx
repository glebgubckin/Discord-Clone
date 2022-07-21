import { FC, useState, useEffect, MouseEvent, useContext } from 'react';
import icons from '@slack/ui'
import './voicechatlist.scss'
import { observer } from 'mobx-react-lite'
import { VoiceChat } from 'types/store/ChatStoreTypes';
import { Context } from '../../../../main'
import Loader from '../../../../components/Loader/Loader'


const VoiceChatList: FC = () => {

  const { chat, channel } = useContext(Context)

  const [voiceChatList, voiceSetChatList] = useState<VoiceChat[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const currentChannel = channel.currentChannel.id

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
        loading
        ? <Loader />
        : voiceChatList.filter(ch => ch.channel_id === currentChannel).map(ch => {
          return (
            <div 
              key={ch.id} 
              className="voiceChatlist__item"
              onClick={(e: MouseEvent<HTMLDivElement>) => selectChat(e, ch.id)}
            >
              {/* Update @slack/ui for image below */}
              {/* <img src={icons.volume} alt="" /> */}
              <p className="voiceChatlist__subtitle">{ch.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default observer(VoiceChatList)