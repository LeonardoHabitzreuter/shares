import { css } from 'styled-components'

const SIZES = {
  'is-small': '12px',
  default: '14px',
  'is-medium': '16px',
  'is-large': '20px'
}

/**
 * Function to define input size.
 */
const defineSize = size => css`
  padding: 10px;
  font-size: ${SIZES[size]};
`

/**
 * Component Styles.
 */
const styledInput = css`
  color: ${({ color }) => color || '#496072'};
  outline: 0;
  transition: all 0.8s;

  border: ${({ bordered }) => bordered ? 'solid 1px #79a0c6' : 'none'};
  border-radius: 2px;

  margin: 0;

  max-width: 100%;
  width: 100%;

  line-height: 1.36;
  box-sizing: border-box;

  position: relative;
  justify-content: flex-start;
  vertical-align: top;

  /* State */
  ${props =>
    props.hasSuccess &&
    css`
      border: 1px solid #00b289;
      &:focus {
        outline: none;
      }
    `}

  ${props =>
    props.hasError &&
    css`
      border: 1px solid #ff7273;
      &:focus {
        outline: none;
      }
    `}

  /* Sizes */
  ${props => props.isSmall && defineSize('is-small')}
  ${props => props.isMedium && defineSize('is-medium')}
  ${props =>
    !props.isSmall &&
    !props.isMedium &&
    !props.isLarge &&
    defineSize('default')}
  ${props => props.isLarge && defineSize('is-large')}

  /* Modifiers */
  ${props =>
    props.isRounded &&
    css`
      border-radius: 290486px;
      padding-left: 1em;
      padding-right: 1em;
    `}

  ${props =>
    props.hasIconLeft &&
    css`
      padding-left: 2.25em;
    `}

  ${props =>
    props.hasIconRight &&
    css`
      padding-right: 2.25em;
    `}
`

export default styledInput
