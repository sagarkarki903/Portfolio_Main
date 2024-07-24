import React from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu'

export default function LogIn() {
  return (
    <>
    <br />
    <Link to={`/admin`}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Log In</button></Link>
    </>
  )
}
