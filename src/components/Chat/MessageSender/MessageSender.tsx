import { Input, Button, Form } from 'antd'
import React, { useState } from 'react'
import { useSendMessageMutation } from '../../../generated/schema'
import MessageSenderProps from './MessageSender.props'
import './MessageSender.css'
import cn from 'classnames'

const MessageSender: React.FC<MessageSenderProps> = (props) => {

  const [formState, setFormState] = useState({
    message: '',
    error: ''
  })

  const [doSendMessage] = useSendMessageMutation({
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
    <div
      className={cn('sender_wrapper', props.className)}
    >
      <Form.Item
        label="Input message"
      >
        <Input
          required
          value={formState.message}
          onChange = {(event) => setFormState({
            ...formState,
            message: event.target.value
          })}
          onKeyPress = {(event) => {
            if (event.key === 'Enter' && formState.message.length>0) {
              doSendMessage()
              event.stopPropagation()
            }
          }}
        />
      </Form.Item>

      <div className='sender_buttons'>
        <Button
          color="primary"
          disabled={formState.message.length===0}
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