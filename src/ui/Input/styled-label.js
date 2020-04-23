import styled, { css } from 'styled-components'

const StyledLabel = styled.label`
  color: #496072;
  font-size: 12px;
  line-height: 1.33;
  font-weight: normal;

  ${({ isUpperCaseLabel }) =>
    isUpperCaseLabel &&
    css`
      text-transform: uppercase;
    `}
`

export default StyledLabel
