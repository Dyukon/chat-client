import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { LoginPayload } from './actions/login.payload'

interface AuthState {
  isLoggedIn: boolean,
  accessToken: string,
  userId: string,
  userName: string
}

const initialState: AuthState = {
  isLoggedIn: false,
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

      return {
        ...state,
        isLoggedIn: true,
        accessToken,
        userId,
        userName
      }
    },
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false
      }
    },
    clearAuthInfo: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        accessToken: '',
        userId: '',
        userName: ''
      }
    }
  }
})

export const { login, logout, clearAuthInfo } = authSlice.actions

export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectAuthToken = (state: RootState) => state.auth.accessToken
export const selectUserId = (state: RootState) => state.auth.userId
export const selectUserName = (state: RootState) => state.auth.userName

export default authSlice.reducer