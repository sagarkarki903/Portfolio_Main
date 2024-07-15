import { useState } from "react"

export default function BurgerMenu(){

const SlidingDiv = () => {
        const[isOpen, setIsOpen] = useState(false);


}


        return(

        <div className="h-56 w-full bg-orange-800 flex justify-center fixed md:hidden ">
        <ul className="flex flex-col justify-center gap-y-4">
                <li>About</li>
                <li>Experiences</li>
                <li>Projects</li>
                <li>About</li>
         </ul>

    </div>
        )
}