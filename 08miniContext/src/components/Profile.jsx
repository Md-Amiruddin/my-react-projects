import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user,setUser} = useContext(UserContext);

    const pleaseLogin = 'Please Login';
    const loggedIn = <>Hello {user.username}, you are logged in. <button onClick={(e) => {
        e.preventDefault()
        setUser(null);
    }}>Log out</button></>;

    return(
        user === null ? pleaseLogin : loggedIn
    )
}

export default Profile