import React from 'react'
import './App.css'
// @ts-ignore
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import Header from './components/Header/Header'
import { useAppSelector } from './hooks'
import { selectAuthIsLoggedIn } from './features/auth/auth.slice'

function App() {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)

  return (
    <div className='app_wrapper'>
      <Header className='app_header'/>
        {isLoggedIn && <Chat className='app_body'/>}
        {!isLoggedIn && <Login className='app_body'/>}
    </div>
  )
}

export default App
