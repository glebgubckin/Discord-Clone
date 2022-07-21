type ChatMessageType = {
  id: number,
  chat_id?: number,
  author: string,
  text: string,
  img? : string,
  timeStamp?: string
}
export default ChatMessageType