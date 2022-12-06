import React from 'react'
import { logout, selectAuthToken, selectUserName } from '../../features/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from 'antd'
import './Header.css'
import HeaderProps from './Header.props'
import cn from 'classnames'

const Header = (props: HeaderProps): JSX.Element => {
  const authToken = useAppSelector(selectAuthToken)
  const userName = useAppSelector(selectUserName)
  const dispatch = useAppDispatch()

  return (
    <div className={cn("header_wrapper", props.className)}>

      {userName && <div className='header_username'>
        {userName}
      </div>}

      <div className="header_logout">
        {authToken && <Button
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