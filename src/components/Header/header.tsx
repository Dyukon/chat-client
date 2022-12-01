import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AUTH_TOKEN } from '../../constants'

const Header = () => {
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link
          to="/login"
          className="ml1 no-underline black"
        >
          login
        </Link>
      </div>
    </div>
  )
}

export default Header