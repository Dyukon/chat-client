import { Container, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { SendMessageDocument } from '../../../gql/graphql'
import { useMutation } from '@apollo/client'
import MessageSenderProps from './MessageSender.props'
import './MessageSender.css'

const MessageSender = (props: MessageSenderProps): JSX.Element => {

  const [formState, setFormState] = useState({
    message: '',
    error: ''
  })

  const [doSendMessage] = useMutation(SendMessageDocument, {
    variables: {
      text: formState.message
    },
    onCompleted: ({ createMessage }) => {
      console.log(`createMessage completed - result: ${JSON.stringify(createMessage)}`)
      setFormState({
        ...formState,
        message: ''
      })
    },
    onError: (error => {
      setFormState({
        ...formState,
        error: `${error}`
      })
    })
  })

  return (
    <Container className='sender_wrapper' maxWidth="xs">
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          label="Input message"
          fullWidth
          required
          value={formState.message}
          onChange = {(e) => setFormState({
            ...formState,
            message: e.target.value
          })}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => doSendMessage()}
        >
          Send message
        </Button>

        {formState.error && <div>
          {formState.error}
        </div>}
      </form>
    </Container>
  )
}

export default MessageSender