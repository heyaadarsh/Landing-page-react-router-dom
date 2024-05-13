import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {username} = useParams()
  return (
    <div>
        <h1 className='text-center p-20'>User: {username}</h1>
    </div>
  )
}

export default User