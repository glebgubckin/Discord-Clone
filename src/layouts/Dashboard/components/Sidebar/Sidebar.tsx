import { FC, useContext } from 'react'
import icons from '@entory/ui'
import Divider from '../../../../components/Divider/Divider'
import profileIcon from '../../../../assets/images/profile.jpg'
import { Context } from '../../../../main'
import './sidebar.scss'
import Hashtag from '../../../../components/Hashtag/Hashtag';
import ChatList from '../ChatList/ChatList';
import VoiceChatList from '../VoiceChatList/VoiceChatList'
import { observer } from 'mobx-react-lite';

const Sidebar: FC = () => {

  const { user } = useContext(Context)

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__icon">
          <img className="sidebar__icon__img" src={profileIcon} alt="profileIcon" />
          <div className="sidebar__icon__status" />
        </div>
        <div className="profile">
          <span className="profile__fullName">{user.fullName}</span>
          <p className="profile__post">{user.jobTitle}</p>
        </div>
      </div>
      <Divider width={100} />
      <ul className="sidebar__actions">
        <li className="sidebar__action">
          <img className="sidebar__action__img" src={icons.usertag} alt="Mentions" />
          <p>Упоминания</p>
        </li>
        <li className="sidebar__action">
          <Hashtag />
          <p style={{marginLeft: '8px'}}>Обсуждения</p>
        </li>
        <li className="sidebar__action">
          <img className="sidebar__action__img" src={icons.event} alt="Events" />
          <p>События</p>
        </li>
      </ul>
      <ChatList />
      <VoiceChatList />
    </div>
  )
}

export default observer(Sidebar)