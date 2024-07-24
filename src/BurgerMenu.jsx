import { useState } from "react"
import { Link } from "react-router-dom"
import {HashLink} from 'react-router-hash-link'
import NavBar from "./NavBar";


export default function BurgerMenu({setBBurgerOpen}){

        // const [burger_open, setBurgerOpen] = useState(false);
   
    const handleLinkClick = () => {
        setBBurgerOpen(prevState => !prevState);
      };
    

        return(
               
       <>
    
                {/* <Link to={`/`}><li>Home</li></Link>
                <Link to={`about`}><li>About</li></Link>
                <Link to={`projects`}><li>Projects</li></Link>
                <HashLink to={`#contact`}><li>Contact</li></HashLink>
                <Link to={`login`}><li>SignIn</li></Link> */}


                <HashLink to={`/#home`} onClick={handleLinkClick}><li className="text-center">Home</li></HashLink>
                <HashLink to={`/#about`} onClick={handleLinkClick}><li className="text-center">About</li></HashLink>
                <HashLink to={`/#projects`} onClick={handleLinkClick}><li className="text-center">Projects</li></HashLink>
                <HashLink to={`/#contact`} onClick={handleLinkClick}><li className="text-center">Contact</li></HashLink>
                <Link to={`login`} onClick={handleLinkClick}><li><button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">Sign In</button></li></Link>
                

         
         </>
        )
}