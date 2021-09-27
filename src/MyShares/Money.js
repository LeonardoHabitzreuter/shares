import React from 'react'

const Money = ({ value }) => (
  <span className={value < 0 ? 'text-danger' : 'text-success'}> R${value.toFixed(2)}</span>
)

export default Money
