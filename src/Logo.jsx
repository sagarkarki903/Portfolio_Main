import { Link } from "react-router-dom"

export default function Logo(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return(
        <div className="logo w-24 h-10 flex  items-center font-extrabold text-lg" onClick={scrollToTop}  >
    
           <Link to={`/`}>Sagar K</Link>
        </div>
    )
}