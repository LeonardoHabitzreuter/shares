import React, { useState } from 'react'
import { over, lensProp, pipe, map, filter, prop, when, isNil, not, always } from 'ramda'
import myShares from '../shares.json'
import Share from './Share'
import { allProfit } from './calc'
import Money from './Money'

const lensDate = lensProp('date')
const castProp = a => over(a, x => x ? new Date(x) : null)
const castPropDate = castProp(lensDate)

const shares = pipe(
  map(castPropDate),
  map(castProp(lensProp('sellDate')))
)(myShares.records)
const dividends = myShares.dividends.map(castPropDate)

const filterShares = showSold => pipe(
  filter(pipe(
    prop('sellPrice'),
    isNil,
    when(always(showSold), not)
  )),
  map(Share(shares, dividends))
)(shares)

const App = () => {
  const [showSold, setShowSold] = useState(false)
  const Wallet = filterShares(false)
  const Sold = filterShares(true)

  return (
    <main className='p-5'>
      <h3>All profit beyond the goal:
        <Money value={allProfit(shares).toFixed(2)} />
      </h3>
      <article className='d-flex mt-3'>
        <button className='btn btn-primary' onClick={() => setShowSold(false)}>MyWallet</button>
        <button className='ml-2 btn btn-secondary' onClick={() => setShowSold(true)}>Sold</button>
      </article>
      <table className='mt-3 bg-light border'>
        <thead>
          <tr>
            <th className='p-3'>Id</th>
            <th className='p-3'>Share</th>
            <th className='p-3'>Price</th>
            <th className='p-3'>Amount</th>
            <th className='p-3'>Cost</th>
            <th className='p-3'>Date</th>
            <th className='p-3'>Sell price</th>
            <th className='p-3 d-flex justify-content-center'>{showSold ? 'Profit beyond goal' : 'Calculate'}</th>
          </tr>
        </thead>
        <tbody>
          {showSold ? Sold : Wallet}
        </tbody>
      </table>
    </main>
  )
}

export default App
