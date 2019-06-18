import React from 'react'
import Label from './label/label'
import Input from './input/input'

const Field = ({ children }) => (
  <div className='form-group'>
    {children}
  </div>
)

Field.Label = Label
Field.Input = Input
export default Field
