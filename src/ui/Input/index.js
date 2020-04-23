import React from 'react'
import { func, string, bool, node, oneOfType, object } from 'prop-types'

import StyledContainer from './styled-container'
import StyledSpan from './styled-span'
import StyledLabel from './styled-label'
import StyledStateText from './styled-state-text'

const useHasError = ({ touched, error, submitError }) => touched && (error || submitError)

const Input = ({
  label,
  meta,
  hasSuccess,
  PrefixIcon,
  SuffixIcon,
  isUpperCaseLabel,
  children
}) => {
  const hasError = useHasError(meta)

  return (
    <StyledContainer>
      {label && (
        <StyledLabel isUpperCaseLabel={isUpperCaseLabel}>{label}</StyledLabel>
      )}
      {children}

      {PrefixIcon && (
        <StyledSpan hasLabel={!!label} style={{ left: 0 }}>
          <PrefixIcon />
        </StyledSpan>
      )}

      {SuffixIcon && (
        <StyledSpan hasLabel={!!label} style={{ right: 0 }}>
          <SuffixIcon />
        </StyledSpan>
      )}

      {hasSuccess && <StyledStateText success>{hasSuccess}</StyledStateText>}
      {hasError && <StyledStateText error>{hasError}</StyledStateText>}
    </StyledContainer>
  )
}

Input.propTypes = {
  label: string,
  meta: object.isRequired,
  hasSuccess: oneOfType([string, bool]),
  PrefixIcon: func,
  SuffixIcon: func,
  children: node,
  isUpperCaseLabel: bool
}

Input.defaultProps = {
  meta: {}
}

export default Input
