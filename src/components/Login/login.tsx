import {
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginUserDocument, SignupUserDocument } from '../../gql/graphql'

function Login() {
  const [formState, setFormState] = useState({
    login: true,
    name: '',
    email: '',
    password: ''
  })

  const [signup] = useMutation(SignupUserDocument, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    // onCompleted: () => {
    // }
  })

  const [login] = useMutation(LoginUserDocument, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    // onCompleted: () => {
    // }
  })

  return (
    <Container maxWidth="xs">
      <Typography variant="h3">
        {formState.login ? 'Login' : 'Sign Up'}
      </Typography>

      <form>
        {!formState.login && <TextField
          variant="outlined"
          margin="normal"
          label="Name"
          fullWidth
          required
          onChange = {(e) => setFormState({
            ...formState,
            name: e.target.value
          })}
        />}

        <TextField
          variant="outlined"
          margin="normal"
          label="Email"
          fullWidth
          required
          onChange = {(e) => setFormState({
            ...formState,
            email: e.target.value
          })}
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          fullWidth
          required
          onChange = {(e) => setFormState({
            ...formState,
            password: e.target.value
          })}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            alert(`onClick - formState: ${JSON.stringify(formState)}`)
            setFormState({
              ...formState,
              login: !formState.login
            })
          }}
        >
          {formState.login ? 'login' : 'create account'}
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            setFormState({
              ...formState,
              login: !formState.login
            })
          }}
        >
          {formState.login ? 'need to create an account?' : 'already have an account?'}
        </Button>
      </form>
    </Container>
  )
}

export default Login