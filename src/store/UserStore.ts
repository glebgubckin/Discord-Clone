import { makeObservable, observable, computed, action } from "mobx"
import User from "../types/store/UserStoreTypes"

class UserStore {
  constructor() {
    makeObservable(this, {
      user: observable,
      isAuth: observable,
      fullName: computed,
      setAuth: action,
      setUser: action,
      login: action,
      register: action,
    })
  }

  public user: User = {
    first_name: "Глеб",
    last_name: "Губкин"
  }
  public isAuth = false

  get fullName() {
    return `${this.user.first_name} ${this.user.last_name}`
  }

  get jobTitle() {
    return 'Frontend разработчик'
  }

  public setUser(user: User) {
    this.user = {...user}
  }

  public setAuth(auth: boolean) {
    this.isAuth = auth
  }

  public login(email: string, password: string) {
    return email === 'admin@admin.ru' && password === '12345678'
  }

  public register(email: string, password: string, confirmedPassword: string) {
    return email && password && confirmedPassword
  }
}

export default new UserStore()