import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ ...props }) => (
  <input {...props} className='form-control' onChange={e => props.onChange(e.target.value)} />
)

Input.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
