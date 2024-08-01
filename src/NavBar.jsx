import Logo from "./Logo";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { useState } from "react";
import Lottie from "lottie-react";
import burger from "./lottie_animations/burger.json"
import cross from "./lottie_animations/cross.json"
import BurgerMenu from "./BurgerMenu";

function NavBar() {
    const [burger_open, setBurgerOpen] = useState(false);
   
    const handleClickBurger = () => {
        setBurgerOpen(prevState => !prevState);
      };
    
    
    return(
        <>
        <div className="flex items-center justify-between  pl-2 pr-4 bg-orange-950 sticky  top-0 z-[20] mx-auto h-16">
      
                <Logo />
                
                <div className="md:block hidden ">
                    <ul className="md:inline-flex space-x-20">
                      <BurgerMenu burgerOpen={burger_open} setBurgerOpen={setBurgerOpen} />
                    </ul>
                </div>

                <div className="h-10 w-11  md:hidden flex justify-center items-center" onClick={handleClickBurger}>
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

        
        <div
        className={`container h-56 w-full bg-orange-800 flex justify-center fixed  top-16 md:hidden duration-500 trasnform ${
          burger_open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
      <ul className="flex flex-col md:inline-flex md:space-x-20 justify-center gap-y-4 md:gap-y-0">
        <BurgerMenu burgerOpen={burger_open} setBurgerOpen={setBurgerOpen}/>
        </ul>
      </div>

        </>

    );

}
export default NavBar;