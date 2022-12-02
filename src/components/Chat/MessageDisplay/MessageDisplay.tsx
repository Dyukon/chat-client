import React from 'react'
import MessageDisplayProps from './MesageDisplay.props'
import './MessageDisplay.css'
import cn from 'classnames'

const MessageDisplay = (props: MessageDisplayProps): JSX.Element => {
  return (
    <div className={cn('display_wrapper', props.className)}>
      Messages
    </div>
  )
}

export default MessageDisplay