import { FC, MouseEvent } from 'react'
import icons from '../icons'
import styles from './google-btn.module.scss'

type GoogleButtonProps = {
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}

const GoogleButton: FC<GoogleButtonProps> = ({onClick}) => {
  return (
    <div onClick={e => onClick(e)} className={styles.googleBtn}>
      <img className={styles.googleBtn__icon} src={icons.google} alt="Войти с помощью Google" />
      Войти с помощью Google
    </div>
  )
}

export default GoogleButton