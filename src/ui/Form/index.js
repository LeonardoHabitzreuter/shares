import React from 'react'

// eslint-disable-next-line react/prop-types
const Form = ({ children, onSubmit }) => (
  <form
    onSubmit={e => {
      e.preventDefault()
      onSubmit()
    }}
  >
    {children}
  </form>
)

export default Form
