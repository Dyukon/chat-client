import React from 'react'
import { logout } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from '@mui/material'
import './Header.css'
import HeaderProps from './Header.props'
import cn from 'classnames'

const Header = (props: HeaderProps): JSX.Element => {
  const authToken = useAppSelector((state) => state.auth.token)
  const userName = useAppSelector((state) => state.auth.userName)
  const dispatch = useAppDispatch()

  return (
    <div className={cn("header_wrapper", props.className)}>

      {userName && <div className='header_username'>
        {userName}
      </div>}

      <div className="header_logout">
        {authToken && <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            console.log(`Logout clicked`)
            dispatch(logout())
          }}
        >
          Logout
        </Button>}
      </div>

    </div>
  )
}

export default Header