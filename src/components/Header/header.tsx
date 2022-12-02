import React from 'react'
import { logout, testAction } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from '@mui/material'

const Header = () => {
  const authToken = useAppSelector((state) => state.auth.token)
  const dispatch = useAppDispatch()

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        {authToken && <Button
          fullWidth
          variant="contained"
          color="primary"
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