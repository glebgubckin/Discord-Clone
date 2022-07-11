import { FC } from 'react'

type ChannelIconProps = {
  id?: number;
  title: string,
}


const ChannelIcon: FC<ChannelIconProps> = ({title}) => {
  return (
    <div className={"channels__icon"}>
      {title}
      <div className="channels__dot" />
    </div>
  )
}

export default ChannelIcon