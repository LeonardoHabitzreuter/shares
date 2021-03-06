import React from 'react'
import MaskedInput from 'react-text-mask'
import { bool } from 'prop-types'
import styled from 'styled-components'

import { toDOMBoolean } from '/styles'
import Input from '..'
import styledInput from '../styled-input'

const StyledInput = styled(MaskedInput)`${styledInput}`

const CPFInput = ({ bordered, ...rest }) => (
  <Input {...rest}>
    <StyledInput
      bordered={toDOMBoolean(bordered)}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      {...rest}
    />
  </Input>
)

CPFInput.propTypes = {
  bordered: bool
}

CPFInput.defaultProps = {
  bordered: true
}

export default CPFInput
