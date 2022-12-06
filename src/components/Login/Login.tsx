import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginUserDocument, SignupUserDocument } from '../../gql/graphql'
import { login } from '../../features/auth/auth.slice'
import { useAppDispatch } from '../../hooks'
import LoginProps from './Login.props'
import './Login.css'
import { Input, Form, Button } from 'antd'

const Login = (props: LoginProps): JSX.Element => {
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
      const user = createUser.user
      console.log(`createUser completed - accessToken: ${accessToken}, user: ${JSON.stringify(user)}`)
      dispatch(login({
        accessToken,
        userId: user.id,
        userName: user.name
      }))
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
      const user = loginUser.user
      console.log(`loginUser completed - accessToken: ${accessToken}, user: ${JSON.stringify(user)}`)
      dispatch(login({
        accessToken: accessToken,
        userId: user.id,
        userName: user.name
      }))
    },
    onError: (error => {
      setFormState({
        ...formState,
        error: `${error}`
      })
    })
  })

  return (
    <div className={props.className}>
      <div className='login_header'>
        {formState.login ? 'Login' : 'Sign Up'}
      </div>

      <form>
        {!formState.login && <Form.Item
          label='Name'
        >
          <Input
            required
            onChange = {(e) => setFormState({
              ...formState,
              name: e.target.value
            })}
          />
        </Form.Item>}

        <Form.Item
          label='Email'
        >
          <Input
            required
            onChange = {(e) => setFormState({
              ...formState,
              email: e.target.value
            })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
        >
          <Input
            type="password"
            required
            onChange = {(e) => setFormState({
              ...formState,
              password: e.target.value
            })}
          />
        </Form.Item>

        <Button
          color="primary"
          onClick={() => formState.login ? doLogin() : doSignup()}
        >
          {formState.login ? 'login' : 'create account'}
        </Button>

        <Button
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
    </div>
  )
}

export default Login