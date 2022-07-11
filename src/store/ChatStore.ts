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
    { id: 0, title: 'Общее' },
    { id: 1, title: 'Приложение' },
    { id: 2, title: 'Маркетинг' }
  ]

  public voiceChats: VoiceChat[] = [
    { id: 0, title: 'Основной' },
    { id: 1, title: 'Деловой' },
    { id: 2, title: 'Формальный' }
  ]

  public currentChat = 0

  addChat(chat: Chat): void {
    this.chats.push(chat)
  }

  addVoiceChat(chat: VoiceChat): void {
    this.voiceChats.push(chat)
  }

  setCurrentChat(id: number): void {
    this.currentChat = id
  }

}

export default new ChatStore()