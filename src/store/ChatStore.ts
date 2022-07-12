import { makeObservable, observable, action } from "mobx"
import {Chat, VoiceChat} from "../types/store/ChatStoreTypes"

class ChatStore {
  constructor() {
    makeObservable(this, {
      chats: observable,
      voiceChats: observable,
      currentChat: observable,
      addChat: action,
      addVoiceChat: action,
      setCurrentChat: action,
    })
  }

  public chats: Chat[] = [
    { id: 456, channel_id: 1, title: 'Общее' },
    { id: 795, channel_id: 1, title: 'Приложение' },
    { id: 124, channel_id: 2, title: 'Маркетинг' }
  ]

  public voiceChats: VoiceChat[] = [
    { id: 145, channel_id: 1, title: 'Основной' },
    { id: 258, channel_id: 2, title: 'Деловой' },
    { id: 875, channel_id: 4, title: 'Формальный' }
  ]

  public currentChat: Chat = {
    id: 0,
    channel_id: 0,
    title: ''
  }

  addChat(chat: Chat): void {
    this.chats.push(chat)
  }

  addVoiceChat(chat: VoiceChat): void {
    this.voiceChats.push(chat)
  }

  setCurrentChat(chat_id: number): void {
    this.currentChat = this.chats.filter(chat => chat.id === chat_id)[0] || this.chats[0].id
  }

}

export default new ChatStore()