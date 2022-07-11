import { makeObservable, observable, action } from "mobx"
import Channel from "types/store/ChannelStoreTypes"

class ChannelStore {
  constructor() {
    makeObservable(this, {
      channels: observable,
      currentChannel: observable,
      addChannel: action,
      setCurrentChannel: action
    })
  }

  public channels: Channel[] = [
    { id: 0, title: '🤖' },
    { id: 1, title: '💎' },
    { id: 2, title: '🍓' },
    { id: 3, title: '🗿' }
  ]

  public currentChannel = 0

  addChannel(channel: Channel): void {
    this.channels.push(channel)
  }

  setCurrentChannel(id: number): void {
    this.currentChannel = id
  }

}

export default new ChannelStore()