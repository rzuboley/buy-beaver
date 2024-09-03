import { makeObservable, observable, action, computed, toJS } from "mobx"
import dayjs from "dayjs"

export interface PeriodData {
  year: string
  month: string
  day?: string
}

class Store {
  private static instance: Store

  @observable private _day: PeriodData["month"] = dayjs().format("DD")
  @observable private _month: PeriodData["month"] = dayjs().format("MM")
  @observable private _year: PeriodData["year"] = dayjs().format("YYYY")

  constructor() {
    makeObservable(this)
  }

  @action.bound
  setDate = ({ day, month, year }: Partial<PeriodData>): void => {
    if (day) this._day = day
    if (month) this._month = month
    if (year) this._year = year
  }

  @computed get periodDate(): PeriodData {
    return toJS({
      day: this._day,
      month: this._month,
      year: this._year
    })
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store()
    }
    return Store.instance
  }
}

export const PeriodDateStore = Store.getInstance()
