import styled from 'styled-components'

const StyledSpan = styled('span')`
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: ${p => p.hasLabel ? 10 : 0}px;
  width: 2.25em;
  z-index: 4;

  display: inline-flex;
  justify-content: center;
  align-self: center;
  align-items: center;
`
export default StyledSpan
