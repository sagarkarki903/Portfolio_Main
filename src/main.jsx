import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Admin from './pages/Admin.jsx'
import Contact from './pages/Contact.jsx'
import Content from './pages/Content.jsx'
import LogInPage from './pages/LogInPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Content />
      },
      {
        path: "/log",
        element: <LogInPage />
      }
      
    ]
  },

  {
    path: "/admin",
    element: <Admin />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router} />

  
  </React.StrictMode>,
)
