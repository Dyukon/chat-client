import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Message } from '../gql/graphql'

interface ChatState {
  messages: Message[]
}

const initialState: ChatState = {
  messages: []
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      return {
        ...state,
        messages: action.payload
      }
    },
  }
})

export const { setMessages } = chatSlice.actions

export const selectMessages = (state: RootState) => state.chat.messages

export default chatSlice.reducer