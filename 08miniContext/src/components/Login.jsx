import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

  return (
    <div>
        <h2><u>Login</u></h2>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        &nbsp;&nbsp;&nbsp;
        <input type="password" placeholder='Passsword' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => {
            e.preventDefault()
            if(username!=='' && password!=='') 
                setUser({username,password})
            else
                alert('Username and/or Password cannot be empty.')
            }}>Submit</button>
    </div>
  )
}

export default Login