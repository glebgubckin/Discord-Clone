import { FC, MouseEvent } from 'react'
import styles from './button.module.scss'

type ButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
  children: JSX.Element[] | JSX.Element | string
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      className={styles.button}
      onClick={e => onClick(e)}
    >
      {children}
    </button>
  )
}

export default Button