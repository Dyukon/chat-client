import React from 'react'
import { clearAuthInfo, logout, selectAuthToken, selectUserName } from '../../features/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from 'antd'
import styles from './Header.module.css'
import HeaderProps from './Header.props'
import cn from 'classnames'

const Header: React.FC<HeaderProps & {className: string}> = (props) => {
  const authToken = useAppSelector(selectAuthToken)
  const userName = useAppSelector(selectUserName)
  const dispatch = useAppDispatch()

  return (
    <div className={cn(styles.wrapper, props.className)}>

      {userName && <div className={styles.username}>
        {userName}
      </div>}

      <div className={styles.logout}>
        {authToken && <Button
          color="secondary"
          onClick={() => {
            console.log(`Logout clicked`)
            dispatch(logout())
            setTimeout(() => {
              dispatch(clearAuthInfo())
            }, 1000)
          }}
        >
          Logout
        </Button>}
      </div>

    </div>
  )
}

export default Header