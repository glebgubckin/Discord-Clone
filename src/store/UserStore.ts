import { makeObservable, observable, computed } from "mobx"
import User from "../types/store/UserStoreTypes"

class UserStore {
  constructor() {
    makeObservable(this, {
      user: observable,
      fullName: computed
    })
  }

  public user: User = {}
  public isAuth: boolean = false

  get fullName() {
    return ''
  }

  public setUser(user: User) {
    this.user = {...user}
  }

  public setAuth() {
    this.isAuth = true
  }
}

export default new UserStore()