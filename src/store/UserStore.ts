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

  get fullName() {
    return ''
  }

  public setUser(user: User) {
    this.user = {...user}
  }
}

export default new UserStore()