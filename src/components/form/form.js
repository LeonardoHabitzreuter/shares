import React from 'react'
import Header from './header/header'
import Field from './field/field'
import Footer from './footer/footer'
import { curry } from 'ramda'

const preventDefault = curry((fn, event) => {
  event.preventDefault()
  fn()
})

const Form = ({ children, onSubmit }) => (
  <form className='d-flex flex-column justify-content-between h-100' onSubmit={preventDefault(onSubmit)}>
    {children}
  </form>
)

Form.Header = Header
Form.Field = Field
Form.Footer = Footer
export default Form
