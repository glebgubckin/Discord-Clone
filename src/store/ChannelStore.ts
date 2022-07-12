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
    { id: 1, title: '🤖' },
    { id: 2, title: '💎' },
    { id: 3, title: '🍓' },
    { id: 4, title: '🌏' },
    { id: 5, title: '🏉' },
    { id: 6, title: '🏆' }
  ]

  public currentChannel: Channel = {
    id: 0,
    title: ''
  }

  addChannel(channel: Channel): void {
    this.channels.push(channel)
  }

  setCurrentChannel(id: number): void {
    this.currentChannel = this.channels.filter(channel => channel.id === id)[0] || this.channels[0].id
  }

}

export default new ChannelStore()