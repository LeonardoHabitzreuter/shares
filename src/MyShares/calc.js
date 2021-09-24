import { goal } from '../shares.json'
import { pipe, curry, add, filter, propEq, allPass, map, prop, sum, isEmpty, isNil, not } from 'ramda'
import dividends from '../dividends.json'

const ONE_DAY = 1000 * 3600 * 24

const filterByDate = curry((prop, date, arr) => filter(
  allPass([
    propEq('share', prop),
    date
  ])
)(arr))

const sumByProp = curry((a, b) => pipe(
  map(prop(a)),
  sum,
  y => y.toFixed(2)
)(b))

const sumDividends = () => pipe(
  map(prop('price')),
  sum
)(dividends)

export const calcProfit = ({ share, price, cost, amount, date, sellPrice, sellDate: x }, sell) => {
  const sellDate = x || new Date()

  const payed = ((price * amount) + cost).toFixed(2)
  const profit = (((sellPrice || sell) * amount) - payed)
  const appDays = Math.ceil(Math.abs((sellDate).getTime() - date.getTime()) / ONE_DAY) - 1
  const goalProfitPerDays = ((payed * goal) - payed) / 365
  return profit - (appDays * goalProfitPerDays.toFixed(10))
}

/* eslint-disable no-undef */
export const showProfitBeyondGoal = (share, sell) => {
  alert(`ProfitBeyondGoal: ${share.profitBeyondGoal || calcProfit(share, sell)}`)
}

export const allProfit = pipe(
  map(prop('profitBeyondGoal')),
  filter(pipe(isNil, not)),
  sum,
  add(sumDividends())
)
