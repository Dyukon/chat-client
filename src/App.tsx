import React from 'react'
import './App.css'
// @ts-ignore
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import Header from './components/Header/Header'
import { useAppSelector } from './hooks'
import './App.css'

function App() {
  const token = useAppSelector((state) => state.auth.token)
  console.log(`App - token: ${token}`)

  return (
    <div className='app_wrapper'>
      <Header className='app_header'/>
      {token && <Chat className='app_body'/>}
      {!token && <Login className='app_body'/>}
    </div>
  )
}

export default App
