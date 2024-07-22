import { Link } from "react-router-dom"
export default function SignIn(){
    return(
        <>
        <Link to={`admin`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</button>
        </Link>
        </>
    )
}