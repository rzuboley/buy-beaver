import { makeObservable, observable, action, computed, toJS } from "mobx"
import type { ItemType } from "@constant"

class Store {
  private static instance: Store

  @observable private _filter: ItemType[] = []

  constructor() {
    makeObservable(this)
  }

  @action.bound
  setFilter = (data: ItemType[]) => {
    this._filter = data
  }

  @computed get filter() {
    return toJS(this._filter)
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store()
    }
    return Store.instance
  }
}

export const PendingFilterStore = Store.getInstance()
