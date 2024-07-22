import { useState } from "react"
import { Link } from "react-router-dom"
import {HashLink} from 'react-router-hash-link'



export default function BurgerMenu(){

        return(

       <>
        <ul className="flex flex-col justify-center gap-y-4">
                {/* <Link to={`/`}><li>Home</li></Link>
                <Link to={`about`}><li>About</li></Link>
                <Link to={`projects`}><li>Projects</li></Link>
                <HashLink to={`#contact`}><li>Contact</li></HashLink>
                <Link to={`login`}><li>SignIn</li></Link> */}


                <HashLink to={`/#home`}><li className="text-center">Home</li></HashLink>
                <HashLink to={`/#about`}><li className="text-center">About</li></HashLink>
                <HashLink to={`/#projects`}><li className="text-center">Projects</li></HashLink>
                <HashLink to={`/#contact`}><li className="text-center">Contact</li></HashLink>
                <Link to={`/login`}><li><button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">Sign In</button></li></Link>
                

         </ul>
         </>
        )
}