import React, { useState } from 'react'
import { curry } from 'ramda'
import { showProfitBeyondGoal } from './calc'
import Money from './Money'

const parseDate = x => x.toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })

const Share = curry((shares, dividends, share) => {
  const [sellPrice, setSellPrice] = useState(share.sellPrice)

  return (
    <tr key={share.id} className='border-top'>
      <td className='p-3'>{share.id}</td>
      <td className='p-3'>{share.share}</td>
      <td className='p-3'>{share.price}</td>
      <td className='p-3'>{share.amount}</td>
      <td className='p-3'>{share.cost}</td>
      <td className='p-3'>{parseDate(share.date)}</td>
      <td className='p-3'>
        <input disabled={!!share.sellPrice} value={sellPrice || ''} onChange={e => setSellPrice(e.target.value)} />
      </td>
      <td className='p-3'>
        {share.profitBeyondGoal
          ? <Money value={share.profitBeyondGoal} />
          : <i title='calculate' className='fas fa-calculator' onClick={() => showProfitBeyondGoal(shares, dividends, share, sellPrice)} />
        }
      </td>
    </tr>
  )
})

export default Share
