import { FC, ChangeEvent } from 'react'
import styles from './input.module.scss'

type InputProps = {
  type: string,
  placeholder?: string,
  value: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({type, placeholder, value, handleChange}) => {
  return (
    <input 
      className={styles.input} 
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input