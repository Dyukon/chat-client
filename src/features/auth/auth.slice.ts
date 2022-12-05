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
  accessToken: localStorage.getItem(AUTH_TOKEN) || '',
  userId: localStorage.getItem(USER_ID) || '',
  userName: localStorage.getItem(USER_NAME) || ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const accessToken = action.payload.accessToken
      const userId = action.payload.userId
      const userName = action.payload.userName

      localStorage.setItem(AUTH_TOKEN, accessToken)
      localStorage.setItem(USER_ID, userId)
      localStorage.setItem(USER_NAME, userName)
      console.log(`login action - payload: ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        accessToken,
        userId,
        userName
      }
    },
    logout: (state) => {
      localStorage.removeItem(AUTH_TOKEN)
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