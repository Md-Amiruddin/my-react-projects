import React from 'react'
import {useDispatch} from 'react-redux'
import authService, { AuthService } from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

  const dispatch = useDispatch()
  const logutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })

  }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full'
    onClick={logutHandler}>Logout
    </button>
  )
}

export default LogoutBtn