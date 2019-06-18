import React, { useState } from 'react'
import { Button, Link, Form } from '../../components'
const Field = Form.Field

const Login = ({ onCreateAccountClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <Form onSubmit={submit}>
      <Form.Header>Login</Form.Header>
      <section>
        <Field>
          <Field.Label>Email</Field.Label>
          <Field.Input type='email' required value={email} onChange={setEmail} />
        </Field>
        <Field>
          <Field.Label>Senha</Field.Label>
          <Field.Input type='password' required value={password} onChange={setPassword} />
        </Field>
      </section>
      <Form.Footer>
        <Link onClick={onCreateAccountClick}>Criar conta</Link>
        <Button>Logar</Button>
      </Form.Footer>
    </Form>
  )
}

export default Login
