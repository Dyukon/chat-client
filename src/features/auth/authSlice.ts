import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface AuthState {
  token: string
}

const initialState: AuthState = {
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      console.log(`login action - state: ${JSON.stringify(state)}`)
    },
    logout: (state) => {
      state.token = ''
      console.log(`logout action - state: ${JSON.stringify(state)}`)
    },
    testAction: (state) => {
      console.log(`test action - state: ${JSON.stringify(state)}`)
    }
  }
})

export const { login, logout, testAction } = authSlice.actions

export const selectAuthToken = (state: RootState) => state.auth.token

export default authSlice.reducer