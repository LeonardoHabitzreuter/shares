import { goal } from '../shares.json'
import { pipe, curry, filter, propEq, allPass, map, prop, sum, isEmpty, isNil, not } from 'ramda'

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

export const calcProfit = (shares, myDividends, { share, price, cost, amount, date, sellPrice, sellDate: x }, sell) => {
  const sellDate = x || new Date()
  const filterShare = filterByDate(share)
  const dividends = filterShare(x => date < x.date && x.date < sellDate, myDividends)

  const getDividends = () => {
    const dividendsPrice = sumByProp('price', dividends)
    const sharesAmount = pipe(
      filterShare(x => x.date < dividends[0].date),
      sumByProp('amount')
    )(shares)

    return (dividendsPrice / sharesAmount) * amount
  }

  const shareDividends = isEmpty(dividends) ? 0 : getDividends()
  const payed = ((price * amount) + cost).toFixed(2)
  const profit = ((((sellPrice || sell) * amount) - payed) + shareDividends)
  const appDays = Math.ceil(Math.abs((sellDate).getTime() - date.getTime()) / ONE_DAY) - 1
  const goalProfitPerDays = ((payed * goal) - payed) / 365
  return profit - (appDays * goalProfitPerDays.toFixed(10))
}

/* eslint-disable no-undef */
export const showProfitBeyondGoal = (shares, myDividends, share, sell) => alert(`ProfitBeyondGoal: ${share.profitBeyondGoal || calcProfit(shares, myDividends, share, sell)}`)

export const allProfit = pipe(
  map(prop('profitBeyondGoal')),
  filter(pipe(isNil, not)),
  sum
)
