import React from 'react'
import { func, bool } from 'prop-types'
import styled from 'styled-components'

import { toDOMBoolean } from '/styles'
import Input from '..'
import styledInput from '../styled-input'

const StyledInput = styled('input')`${styledInput}`

const TextInput = ({ PrefixIcon, SuffixIcon, bordered, ...rest }) => (
  <Input
    PrefixIcon={PrefixIcon}
    SuffixIcon={SuffixIcon}
    {...rest}
  >
    <StyledInput
      hasIconLeft={!!PrefixIcon}
      hasIconRight={!!SuffixIcon}
      bordered={toDOMBoolean(bordered)}
      {...rest}
    />
  </Input>
)

TextInput.propTypes = {
  PrefixIcon: func,
  SuffixIcon: func,
  bordered: bool
}

TextInput.defaultProps = {
  bordered: true
}

export default TextInput
