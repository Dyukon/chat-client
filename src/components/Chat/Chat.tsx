import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'
import cn from 'classnames'

const Chat = (props: ChatProps): JSX.Element => {
  return (
    <div className={cn('chat_wrapper', props.className)}>
      <ChatHeader className='chat_header'/>
      <MessageDisplay className='chat_display'/>
      <MessageSender className='chat_sender'/>
    </div>
  )
}

export default Chat