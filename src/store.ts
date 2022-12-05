import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/auth.slice'
import chatReducer from './features/chat/chat.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch