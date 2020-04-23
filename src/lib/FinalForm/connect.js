import React from 'react'
import { mergeRight } from 'ramda'
import { object, func } from 'prop-types'

const connectField = Component => {
  const ConnectedField = ({ inputOnChange, input, ...rest }) => (
    <Component
      {...mergeRight(input, rest)}
      onChange={event => {
        inputOnChange && inputOnChange(event)
        input.onChange && input.onChange(event)
      }}
    />
  )

  ConnectedField.propTypes = {
    input: object.isRequired,
    inputOnChange: func
  }

  return ConnectedField
}

export default connectField
