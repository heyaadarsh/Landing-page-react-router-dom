import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()

    // console.log(data);

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/heyaadarsh`)
        .then(res => res.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
    },[])

  return (
    <div className='text-center p-20'>
        <img src={data.avatar_url} className=' rounded-lg w-28 m-auto'/>
        <h1 className='text-center mt-5 text-2xl'>{data.name}</h1>
        <h1 className='text-center mt-1 text-lg'>Current Followers: {data.followers}</h1>
    </div>
  )
}

export default Github

// export const githubInfoLoader = async() => {
//     const response = await fetch('https://api.github.com/users/heyaadarsh')
//     return response.json()
// }