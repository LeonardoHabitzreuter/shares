import React from 'react'
import PhoneInput from 'react-phone-number-input/basic-input'
import { bool } from 'prop-types'
import styled from 'styled-components'

import { toDOMBoolean } from '/styles'
import Input from '..'
import styledInput from '../styled-input'

const StyledInput = styled(PhoneInput)`${styledInput}`

const Phone = ({ bordered, ...rest }) => (
  <Input {...rest}>
    <StyledInput
      country="BR"
      bordered={toDOMBoolean(bordered)}
      maxLength={15}
      {...rest}
    />
  </Input>
)

Phone.propTypes = {
  bordered: bool
}

Phone.defaultProps = {
  bordered: true
}

export default Phone
