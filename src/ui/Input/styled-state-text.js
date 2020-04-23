import styled, { css } from 'styled-components'

const COLORS = {
  success: '#00b289',
  error: '#ff7273'
}

const StyledStateText = styled('span')`
  font-size: 0.8rem;

  ${props =>
    props.error &&
    css`
      color: ${COLORS.error};
    `}

  ${props =>
    props.success &&
    css`
      color: ${COLORS.success};
    `}
`

export default StyledStateText
