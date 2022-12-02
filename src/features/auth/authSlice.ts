import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { AUTH_TOKEN } from '../../constants'

interface AuthState {
  token: string
}

const initialState: AuthState = {
  token: localStorage.getItem(AUTH_TOKEN) || ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const token = action.payload
      state.token = token
      localStorage.setItem(AUTH_TOKEN, token)
      console.log(`login action - token: ${token}`)
    },
    logout: (state) => {
      state.token = ''
      localStorage.removeItem(AUTH_TOKEN)
      console.log(`logout action`)
    },
    testAction: (state) => {
      console.log(`test action - state: ${JSON.stringify(state)}`)
    }
  }
})

export const { login, logout, testAction } = authSlice.actions

export const selectAuthToken = (state: RootState) => state.auth.token

export default authSlice.reducer