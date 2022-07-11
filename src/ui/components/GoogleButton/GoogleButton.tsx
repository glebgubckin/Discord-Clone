import { FC, MouseEvent } from 'react'
import google from '../../../assets/images/google.svg'
import styles from './google-btn.module.scss'

type GoogleButtonProps = {
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}

const GoogleButton: FC<GoogleButtonProps> = ({onClick}) => {
  return (
    <div onClick={e => onClick(e)} className={styles.googleBtn}>
      <img className={styles.googleBtn__icon} src={google} alt="Войти с помощью Google" />
      Войти с помощью Google
    </div>
  )
}

export default GoogleButton