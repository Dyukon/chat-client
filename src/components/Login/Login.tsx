import { useState } from 'react'
import { ApolloError } from '@apollo/client'
import {
  useLoginUserMutation,
  useSignupUserMutation
} from '../../generated/schema'
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

  const [doSignup] = useSignupUserMutation({
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
        error: extractErrorMessage(error)
      })
    })
  })

  const [doLogin] = useLoginUserMutation({
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
        error: extractErrorMessage(error)
      })
    })
  })

  return (
    <div className={props.className}>
      <div className='login_header'>
        {formState.login ? 'Login' : 'Sign Up'}
      </div>

      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
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

        <div className='login_buttons'>
          <Button
            className='login_button'
            type="primary"
            onClick={() => formState.login ? doLogin() : doSignup()}
          >
            {formState.login ? 'Login' : 'Create account'}
          </Button>

          <Button
            type="ghost"
            onClick={() => {
              setFormState({
                ...formState,
                login: !formState.login
              })
            }}
          >
            {formState.login ? 'Create a new account' : 'Login with existing account'}
          </Button>
        </div>

        {formState.error && <div className='login_error'>
          {formState.error}
        </div>}
      </Form>
    </div>
  )
}

function extractErrorMessage(error: ApolloError) {
  return error.graphQLErrors[0].extensions?.response?.message[0] ?? error.message
}

export default Login