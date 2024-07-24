import React from 'react'
import { Link } from 'react-router-dom'

export default function LogInPage() {
  return (
    <div>
       
       <Link to={`/admin`}><button className='bg-amber-700'>Admin</button></Link>
        
    </div>
  )
}
