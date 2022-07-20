import { FC } from 'react'
import profile from '../../../assets/images/profile.jpg'
import './message.scss'
import ChatMessageType from "../../../types/pages/ChatMessageType";
import MessageText from "../../../components/MessageText/MessageText";

const Message: FC<ChatMessageType> = ({id, author, text, img, timeStamp}) => {
  return (
    <div className="message">
      <img className="message__img" src={img || profile} alt="profile"/>
      <div className="message__block">
        <div className="message__header">
          <span className="message__title">{ author}</span>
          <span className="message__time">| {timeStamp || '5 hours ago'}</span>
        </div>
        <div className="message__wrapper">
          <MessageText text={text} />
        </div>
      </div>
    </div>
  )
}

export default Message