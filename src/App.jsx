import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Story from './Story'
import Lottie from "lottie-react";
import OnProgress from "./OnProgress.json"
import Buttons from './Buttons';
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"
import Footer from './Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen md:px-4 bg-[#0F172A] text-slate-50 flex flex-col" >
        <div className="container mx-auto px-0 py-0 bg-[#1E293B] shadow-md flex-grow">
              
               <NavBar />
              
               <div>
                <Outlet />
              </div>
       

              {/* <div>
                  <Lottie animationData={OnProgress} />
              </div> */}
              
      </div>
      <Footer />
     
    </div>
    
      
    </>
  )
}

export default App
