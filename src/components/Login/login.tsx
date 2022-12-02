import {
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginUserDocument, SignupUserDocument } from '../../gql/graphql'
import { login } from '../../features/auth/authSlice'
import { useAppDispatch } from '../../hooks'

function Login() {
  const dispatch = useAppDispatch()

  const [formState, setFormState] = useState({
    login: true,
    name: '',
    email: '',
    password: '',
    error: ''
  })

  const [doSignup] = useMutation(SignupUserDocument, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ createUser }) => {
      const accessToken = createUser.accessToken
      console.log(`createUser completed - accessToken: ${JSON.stringify(accessToken)}`)
      dispatch(login(accessToken))
    },
    onError: (error => {
      setFormState({
        ...formState,
        error: `${error}`
      })
    })
  })

  const [doLogin] = useMutation(LoginUserDocument, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ loginUser }) => {
      const accessToken = loginUser.accessToken
      console.log(`loginUser completed - accessToken: ${JSON.stringify(accessToken)}`)
      dispatch(login(accessToken))
    },
    onError: (error => {
      setFormState({
        ...formState,
        error: `${error}`
      })
    })
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
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => formState.login ? doLogin() : doSignup()}
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
          {formState.login ? 'create a new account' : 'login with existing account'}
        </Button>

        {formState.error && <div>
          {formState.error}
        </div>}
      </form>
    </Container>
  )
}

export default Login