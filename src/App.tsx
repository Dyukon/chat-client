import React from 'react'
import './App.css'
import Login from './components/Login/login'
import Chat from './components/Chat/chat'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Chat/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
