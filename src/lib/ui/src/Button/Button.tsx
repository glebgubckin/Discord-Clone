import { FC, HTMLProps, MouseEvent } from 'react'
import styles from './button.module.scss'

type ButtonProps = {
  disabled: boolean,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
  children: JSX.Element[] | JSX.Element | string
}

const Button: FC<ButtonProps> = ({disabled, onClick, children}) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={e => onClick(e)}
    >
      {children}
    </button>
  )
}

export default Button