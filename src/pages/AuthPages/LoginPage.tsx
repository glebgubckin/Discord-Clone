import { FC, useState, ChangeEvent, MouseEvent, useContext } from 'react'
import {Button, GoogleButton, Input} from '../../ui'
import styles from './auth.module.scss'
import setTitle from '../../lib/utils/setTitle';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {

  setTitle('Войти')

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { user } = useContext(Context)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const signInHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    user.setAuth()
    console.log(user.isAuth);
  }

  const signInWithGoogleHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log({email, password})
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.form__title}>Войти</h1>
        <div className={styles.form__input__block}>
          <span className={styles.form__subtitle}>Эл. почта</span>
          <Input type="text" value={email} handleChange={handleEmailChange}/>
        </div>
        <div className={styles.form__input__block}>
          <span className={styles.form__subtitle}>Пароль</span>
          <Input type="password" value={password} handleChange={handlePasswordChange}/>
        </div>
        <Link className={styles.form__link} to="/forgot">Забыли пароль</Link>
        <Link style={{marginBottom: '0'}} className={styles.form__link} to='/register'>Зарегистрироваться</Link>
        <Button onClick={signInHandler}>Войти</Button>
        <GoogleButton onClick={signInWithGoogleHandler} />
      </form>
    </div>
  )
}

export default observer(LoginPage)