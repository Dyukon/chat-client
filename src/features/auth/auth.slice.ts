import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { AUTH_TOKEN, USER_ID, USER_NAME } from '../../constants'
import { LoginPayload } from './actions/login.payload'

interface AuthState {
  accessToken: string,
  userId: string,
  userName: string
}

const initialState: AuthState = {
  accessToken: '',
  userId: '',
  userName: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const accessToken = action.payload.accessToken
      const userId = action.payload.userId
      const userName = action.payload.userName

      console.log(`login action - payload: ${JSON.stringify(action.payload)}`)

      return {
        ...state,
        accessToken,
        userId,
        userName
      }
    },
    logout: (state) => {
      console.log(`logout action`)
      return {
        ...state,
        accessToken: '',
        userId: '',
        userName: ''
      }
    },
    gotInfo: (
      state,
      action: PayloadAction<{userId: string, userName: string}>
    ) => {
      const info = action.payload
      console.log(`gotInfo action - info: ${JSON.stringify(info)}`)
      return {
        ...state,
        userId: info.userId,
        userName: info.userName
      }
    }
  }
})

export const { login, logout, gotInfo } = authSlice.actions

export const selectAuthToken = (state: RootState) => state.auth.accessToken
export const selectUserId = (state: RootState) => state.auth.userId
export const selectUserName = (state: RootState) => state.auth.userName

export default authSlice.reducer