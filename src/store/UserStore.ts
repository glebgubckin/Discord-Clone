import { makeObservable, observable, computed, action } from "mobx"
import User from "../types/store/UserStoreTypes"

class UserStore {
  constructor() {
    makeObservable(this, {
      user: observable,
      isAuth: observable,
      fullName: computed,
      setAuth: action,
      setUser: action
    })
  }

  public user: User = {
    first_name: "Глеб",
    last_name: "Губкин"
  }
  public isAuth = true

  get fullName() {
    return 'Глеб Губкин'
  }

  get jobTitle() {
    return 'Frontend разработчик'
  }

  public setUser(user: User) {
    this.user = {...user}
  }

  public setAuth() {
    this.isAuth = !this.isAuth
  }
}

export default new UserStore()