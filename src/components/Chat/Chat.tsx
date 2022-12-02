import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import { useQuery } from '@apollo/client'
import { GetCurrentUserInfoDocument, Message } from '../../gql/graphql'
import { gotInfo } from '../../features/authSlice'
import { useAppDispatch } from '../../hooks'
import { setMessages } from '../../features/chatSlice'

const Chat = (props: ChatProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const { loading, error } = useQuery(GetCurrentUserInfoDocument, {
    onCompleted: ({ currentUser, messages }) => {
      console.log(`currentUserInfo completed - currentUser: ${JSON.stringify(currentUser)}, messages: ${JSON.stringify(messages)}`)
      dispatch(gotInfo({
        userId: currentUser.id,
        userName: currentUser.name
      }))
      dispatch(setMessages(messages))
    },
  })

  if (loading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>{`Error: ${error}`}</div>)
  }

  return (
    <div className={cn('chat_wrapper', props.className)}>
      <ChatHeader className='chat_header'/>
      <MessageDisplay className='chat_display'/>
      <MessageSender className='chat_sender'/>
    </div>
  )
}

export default Chat