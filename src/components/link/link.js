import React from 'react'

const Link = ({ children, ...props }) => (
  <button {...props} className='btn btn-link'>{children}</button>
)

Link.defaultProps = {
  type: 'button'
}

export default Link
