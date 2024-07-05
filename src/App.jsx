import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Story from './Story'
import Lottie from "lottie-react";
import OnProgress from "./OnProgress.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen md:px-4 bg-[#0F172A] text-slate-50" >
        <div className="container mx-auto px-0 py-0 bg-[#1E293B] shadow-md rounded-lg">
              {/* <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
              <p className="text-lg">Welcome to my portfolio website!</p> */}
              {/* Add more content here */}
              
              
               <NavBar />

              <div>
               <Story />
              </div>

              <div>
                  <Lottie animationData={OnProgress} />
              </div>

              
              
              

              
      </div>
    </div>
      
    </>
  )
}

export default App
