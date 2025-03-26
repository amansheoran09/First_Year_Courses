import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import Math111 from "./components/Maths/Math111.jsx"
import Home from "./components/Home.jsx"
import PYQ from "./components/Maths/PYQ.jsx"

import Math113 from "./components/Maths/Math113.jsx"
import Draw111 from "./components/Others/Draw111.jsx"
import TaPyq from "./components/Others/TaPyq.jsx"
import Esc111Content from "./components/ESC/Esc111Content.jsx"
import AM from "./components/ESC/AM.jsx"
import PP from "./components/ESC/PP.jsx"
import EscPyq from "./components/ESC/EscPyq.jsx"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
   
    {
      path:"/math111",
      element:<><Math111/></>

    },
    {
      path:"/math111/pyq",
      element:<><PYQ/></>
    },
    {
      path:"/math113",
      element:<><Math113/></>

    },
    {
      path:"/ta111",
      element:<><Draw111/></>

    },
    {
      path:"/ta111/pyq",
      element:<><TaPyq/></>
    },
    {
      path:"/esc111",
      element:<><Esc111Content/></>
    },
    {
      path:"/esc111/AMresourses",
      element:<><AM/></>
    },
    {
      path:"/esc111/pp",
      element:<><PP/></>
    },
    {
      path:"/esc111/pyq",
      element:<><EscPyq/></>
    }
    
    
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
