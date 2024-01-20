import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom';

function Github() {
    // const {userName} = useParams();
    // const [data,setData] = useState([]);
    const data = useLoaderData();

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/md-amiruddin`).
    //     then(res => res.json()).
    //     then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
        <div>Github followers : {data.followers}</div>
        <img className='p-4' src={data.avatar_url} alt="Github profile pic" />
    </>
  )
}

export default Github

export async function githubInfoLoader(){
  const res = await fetch('https://api.github.com/users/md-amiruddin');
  return res.json();
}