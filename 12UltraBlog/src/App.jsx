import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice";
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // authService.login({email: 'abc@g.com', password: '12345678'})
    // authService.logout()
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen relative flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <div className="absolute bottom-0 left-0 right-0">
          <Footer/>
        </div>
      </div>
    </div>
  ) : (
    <div>
      Loading
    </div>
  )
}

export default App