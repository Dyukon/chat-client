import { Container, } from '@mui/material'
import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'

const Chat = (props: ChatProps): JSX.Element => {

  return (
    <Container className='wrapper' maxWidth="xs">
      <ChatHeader className='header'/>
      <MessageDisplay className='display'/>
      <MessageSender className='sender'/>
    </Container>
  )
}

export default Chat