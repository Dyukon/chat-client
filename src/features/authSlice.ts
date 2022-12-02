import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AUTH_TOKEN } from '../constants'

interface AuthState {
  token: string,
  userId: string,
  userName: string
}

const initialState: AuthState = {
  token: localStorage.getItem(AUTH_TOKEN) || '',
  userId: '',
  userName: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const token = action.payload
      localStorage.setItem(AUTH_TOKEN, token)
      console.log(`login action - token: ${token}`)
      return {
        ...state,
        token: token
      }
    },
    logout: (state) => {
      localStorage.removeItem(AUTH_TOKEN)
      console.log(`logout action`)
      return {
        ...state,
        token: '',
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

export const selectAuthToken = (state: RootState) => state.auth.token
export const selectUserName = (state: RootState) => state.auth.userName

export default authSlice.reducer