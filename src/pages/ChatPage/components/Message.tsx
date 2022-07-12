import { FC } from 'react'
import './message.scss'

const Message: FC = () => {
  return (
    <div className="message">
      <h1>Имя</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro natus blanditiis unde dolore iure, quod ipsum, assumenda 
        deleniti harum magnam neque dolorem nesciunt inventore tenetur nam 
        esse quae temporibus ut.
      </p>
    </div>
  )
}

export default Message