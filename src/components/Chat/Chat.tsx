import MessageDisplay from './MessageDisplay/MessageDisplay'
import MessageSender from './MessageSender/MessageSender'
import ChatHeader from './ChatHeader/ChatHeader'
import './Chat.css'
import ChatProps from './Chat.props'
import cn from 'classnames'
import { useQuery } from '@apollo/client'
import { GetCurrentUserDocument } from '../../gql/graphql'
import { gotInfo } from '../../features/auth/authSlice'
import { useAppDispatch } from '../../hooks'

const Chat = (props: ChatProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const { loading, error } = useQuery(GetCurrentUserDocument, {
    onCompleted: ({ currentUser }) => {
      console.log(`currentUser completed - currentUser: ${JSON.stringify(currentUser)}`)
      dispatch(gotInfo({
        userId: currentUser.id,
        userName: currentUser.name
      }))
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