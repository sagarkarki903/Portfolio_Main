import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Story from './Story'
import Lottie from "lottie-react";
import OnProgress from "./OnProgress.json"
import Buttons from './Buttons';
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen md:px-4 bg-[#0F172A] text-slate-50" >
        <div className="container mx-auto px-0 py-0 bg-[#1E293B] shadow-md rounded-lg">
              
               <NavBar />
               <Link to={`/admin`}><button className='bg-amber-700'>Admin</button></Link>
               <br />
               <br />
               <Link to={`/log`}><button className='bg-green-700'>Admin</button></Link>
               <div>
                <Outlet />
              </div>
       

              {/* <div>
                  <Lottie animationData={OnProgress} />
              </div> */}

            
              
              
              

              
      </div>
    </div>
      
    </>
  )
}

export default App
