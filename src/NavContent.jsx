import React from 'react'

export default function NavContent() {
  return (
    <>
     <HashLink to={`/#home`} onClick={handleLinkClick}><li className="text-center">Home</li></HashLink>
     <HashLink to={`/#about`} onClick={handleLinkClick}><li className="text-center">About</li></HashLink>
     <HashLink to={`/#projects`} onClick={handleLinkClick}><li className="text-center">Projects</li></HashLink>
     <HashLink to={`/#contact`} onClick={handleLinkClick}><li className="text-center">Contact</li></HashLink>
     <Link to={`/login`} onClick={handleLinkClick}><li><button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">Sign In</button></li></Link>
    </>
  )
}
