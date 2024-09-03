import { ItemType, type TotalData } from "@constant"
import { makeObservable, observable, action, computed, toJS } from "mobx"
import sumBy from "lodash/sumBy"
import values from "lodash/values"

class Store {
  private static instance: Store

  @observable private _total: TotalData = {
    [ItemType.Archive]: 0,
    [ItemType.Fees]: 0,
    [ItemType.Food]: 0,
    [ItemType.HomeOther]: 0,
    [ItemType.Pending]: 0
  }

  constructor() {
    makeObservable(this)
  }

  @action.bound
  setTotals = (data: Partial<TotalData>) => {
    this._total = Object.assign(this._total, data)
  }

  @computed get total() {
    return toJS(this._total)
  }

  @computed get totalAmount() {
    return toJS(sumBy(values(this._total)))
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store()
    }
    return Store.instance
  }
}

export const DoneTotalsStore = Store.getInstance()
