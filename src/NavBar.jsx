import Logo from "./Logo";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { useState } from "react";
import Lottie from "lottie-react";
import burger from "./lottie_animations/burger.json"
import cross from "./lottie_animations/cross.json"

function NavBar() {
    const [burger_open, setBurgerOpen] = useState(false);
    const [burger_menu, setBurgerMenu] = useState(false);
    const handleClickBurger = () => {
        setBurgerOpen(prevState => !prevState);
        setBurgerMenu(prevState => !prevState);
        

      };
    
    
    return(
        <>
        <div className="flex items-center justify-between p-6 bg-orange-950 sticky top-0 z-[20] mx-auto ">
      
                <Logo />
                <div className=" md:block hidden">
                    <ul className="md:inline-flex space-x-20">
                        <li>About</li>
                        <li>Experiences</li>
                        <li>Projects</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="md:block hidden">
                     <SignIn/>
                </div>

                <div className="h-11 w-11 md:hidden" onClick={handleClickBurger}>
                {burger_open ? (
                    // <img src="images\forks.png" alt="hamburger_menu " /> 
                    <Lottie animationData={cross} loop={false}/> 
                ) : (
                    // <img src="images\burger.png" alt="hamburger_menu " />
                    <Lottie animationData={burger} loop={false}/> 
                )
                }
                    
                </div>
               
              
        </div>

        {burger_menu && (
            <div className="h-56 w-full bg-orange-800 flex justify-center fixed  md:hidden ">
            <ul className="flex flex-col justify-center gap-y-4">
                    <li>About</li>
                    <li>Experiences</li>
                    <li>Projects</li>
                    <li>About</li>
             </ul>

        </div>
        )}
       

        </>

    );

}
export default NavBar;