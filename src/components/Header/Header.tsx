import React from 'react'
import { logout, testAction } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from '@mui/material'
import './Header.css'
import HeaderProps from './Header.props'

const Header = (props: HeaderProps): JSX.Element => {
  const authToken = useAppSelector((state) => state.auth.token)
  const dispatch = useAppDispatch()

  return (
    <div className="wrapper">
      <div className="logout">
        {authToken && <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            console.log(`Logout clicked`)
            dispatch(logout())
            dispatch(testAction())
          }}
        >
          Logout
        </Button>}
      </div>

    </div>
  )
}

export default Header