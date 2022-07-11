import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import styles from './auth.module.scss'
import setTitle from '../../lib/utils/setTitle'
import { emailValidate, passwordValidate } from '../../lib/utils'
import { Button, Input } from '@entory/ui'
import { Link } from 'react-router-dom'

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

  const formValidate = (): boolean => {
    return passwordValidate(password, confirmedPassword) 
        && emailValidate(email) 
        ? false 
        : true
  }

  const signUpHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log({email, password})
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
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
        <Link style={{marginBottom: '0'}} className={styles.form__link} to='/login'>Войти</Link>
        <Button disabled={formValidate()} onClick={signUpHandler}>Зарегистрироваться</Button>
      </form>
    </div>
  )
}

export default RegisterPage