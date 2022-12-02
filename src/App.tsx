import React from 'react'
import './App.css'
import Login from './components/Login/login'
import Chat from './components/Chat/chat'
import Header from './components/Header/header'
import { useAppSelector } from './hooks'

function App() {
  const token = useAppSelector((state) => state.auth.token)
  console.log(`App - token: ${token}`)

  return (
    <div>
      <Header/>
      {token && <Chat/>}
      {!token && <Login/>}
    </div>
  )
}

export default App
