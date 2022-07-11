import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import {Button, GoogleButton, Input} from '../../ui'
import styles from './auth.module.scss'
import setTitle from '../../lib/utils/setTitle';

const LoginPage: FC = () => {

  setTitle('Войти')

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const signInHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log({email, password})
  }

  const signInWithGoogleHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log({email, password})
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
      <h1 className={styles.form__title}>Войти</h1>
      <div className={styles.form__input__block}>
        <span className={styles.form__subtitle}>Эл. почта</span>
        <Input type="text" value={email} handleChange={handleEmailChange}/>
      </div>
      <div className={styles.form__input__block}>
        <span className={styles.form__subtitle}>Пароль</span>
        <Input type="password" value={password} handleChange={handlePasswordChange}/>
      </div>
      <a className={styles.form__link} href="#">Забыли пароль</a>
      <Button onClick={signInHandler}>Войти</Button>
      <GoogleButton onClick={signInWithGoogleHandler} />
    </div>
    </div>
  )
}

export default LoginPage