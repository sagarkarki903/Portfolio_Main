import React from 'react'
import { Link } from 'react-router-dom'

export default function LogInPage() {
  return (
    <div>
       <h1>This is the new Log In Page</h1>
       <Link to={`/admin`}><button className='bg-amber-700'>Admin</button></Link>
        
    </div>
  )
}
