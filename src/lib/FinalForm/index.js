/* eslint-disable react/prop-types */
import React from 'react'
import UIForm from '/ui/Form'
import { Form as FinalForm, Field as FinalField } from 'react-final-form'
import styled from 'styled-components'
import connect from './connect'

const Container = styled.div`
  margin-bottom: 12px;
  width: 100%;
`

// eslint-disable-next-line react/prop-types
const Field = ({ children, component, ...rest }) => (
  <Container>
    <FinalField error {...rest} component={connect(component)}>{children}</FinalField>
  </Container>
)

const Form = ({ children, ...rest }) => (
  <FinalForm
    render={({ handleSubmit }) => (
      <UIForm onSubmit={handleSubmit}>
        {children}
      </UIForm>
    )}
    {...rest}
  />
)

Form.Field = Field
export default Form
