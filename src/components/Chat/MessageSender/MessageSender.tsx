import { Input, Button, Form } from 'antd'
import React, { useState } from 'react'
import { useSendMessageMutation } from '../../../generated/schema'
import MessageSenderProps from './MessageSender.props'
import './MessageSender.css'
import cn from 'classnames'

const MessageSender: React.FC<MessageSenderProps & {className: string}> = (props) => {

  const [formState, setFormState] = useState({
    message: '',
    messageToSend: '',
    error: ''
  })

  const [doSendMessage] = useSendMessageMutation({
    variables: {
      message: formState.messageToSend
    },
    onCompleted: ({ createEvent }) => {
      console.log(`createEvent completed - result: ${JSON.stringify(createEvent)}`)
      setFormState({
        ...formState,
        message: '',
        messageToSend: ''
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
    <div
      className={cn('sender_wrapper', props.className)}
    >
      <Form.Item
        label="Input message"
      >
        <Input
          required
          value={formState.message}
          onChange = {(event) => {
            const message = event.target.value
            setFormState({
              ...formState,
              message,
              messageToSend: message.trim()
            })
          }}
          onKeyPress = {(event) => {
            if (event.key === 'Enter' && formState.messageToSend.length>0) {
              doSendMessage()
              event.stopPropagation()
            }
          }}
        />
      </Form.Item>

      <div className='sender_buttons'>
        <Button
          color="primary"
          disabled={formState.messageToSend.length===0}
          onClick={() => doSendMessage()}
        >
          Send message
        </Button>
      </div>

      {formState.error && <div className='sender_error'>
        {formState.error}
      </div>}
    </div>
  )
}

export default MessageSender