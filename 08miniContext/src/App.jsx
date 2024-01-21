import { useContext } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/userContext'

function App() {

  const {user} = useContext(UserContext);
  const login = <Login/>;
  const profile = <Profile/>;
  console.log(user);

  return (
    <>
      <h1>
        React with Amir!
      </h1>
      {user===null ? login : profile}
    </>
  )
}

export default App
