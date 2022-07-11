import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import styles from './auth.module.scss'
import setTitle from '../../lib/utils/setTitle';
import { Button, Input } from '../../ui'

const RegisterPage: FC = () => {
  setTitle('Регистрация')

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmedPassword, setConfirmedPassword] = useState<string>("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleConfirmedPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(e.target.value)
  }

  const signUpHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log({email, password})
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h1 className={styles.form__title}>Регистрация</h1>
        <div className={styles.form__input__block}>
          <span className={styles.form__subtitle}>Эл. почта</span>
          <Input type="text" value={email} handleChange={handleEmailChange}/>
        </div>
        <div className={styles.form__input__block}>
          <span className={styles.form__subtitle}>Пароль</span>
          <Input type="password" value={password} handleChange={handlePasswordChange}/>
        </div>
        <div className={styles.form__input__block}>
          <span className={styles.form__subtitle}>Подтвердите пароль</span>
          <Input type="password" value={confirmedPassword} handleChange={handleConfirmedPasswordChange}/>
        </div>
        <Button onClick={signUpHandler}>Зарегистрироваться</Button>
      </div>
    </div>
  )
}

export default RegisterPage