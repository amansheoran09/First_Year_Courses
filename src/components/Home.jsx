import React from 'react'
import MTH111 from './Maths/MTH111.jsx'
import MTH112 from "./Maths/MTH112.jsx"
import MTH113 from "./Maths/MTH113.jsx"
import MTH114 from "./Maths/MTH114.jsx"
import PHY111 from "./Physics/PHY111.jsx"
import PHY112 from "./Physics/PHY112.jsx"
import PHY113 from "./Physics/PHY113.jsx"
import PHY114 from "./Physics/PHY114.jsx"
import CHM111 from "./Chemistry/CHM111.jsx"
import CHM112 from "./Chemistry/CHM112.jsx"
import CHM113 from "./Chemistry/CHM113.jsx"
import ELC111 from "./English/ELC111.jsx"
import ELC112 from "./English/ELC112.jsx"
import ELC113 from "./English/ELC113.jsx"
import ESC111 from "./ESC/ESC111.jsx"
import ESC112 from "./ESC/ESC112.jsx"
import ESC113 from "./ESC/ESC113.jsx"
import TA111 from "./Others/TA111.jsx"
import LIF111 from "./Others/LIF111.jsx"
import PHY115 from './Physics/PHY115.jsx'

const Home = () => {
  return (
    <div className='body'><h1 classname="title">Maths</h1>
    <div className="container">
     <MTH111/>
     <MTH112/>
     <MTH113/>
     <MTH114/>
     </div>
     <h1 classname="title">Physics</h1>
     <div className="container">
     <PHY111/>
     <PHY112/>
     <PHY113/>
     <PHY114/>
     <PHY115/>
     </div>
     <h1 classname="title">Chemistry</h1>
     <div className="container">
     <CHM111/>
     <CHM112/>
     <CHM113/>
     </div>
     <h1 classname="title">English</h1>
     <div className="container">
     <ELC111/>
     <ELC112/>
     <ELC113/>
     </div>
     <h1 classname="title">Fundamentals of Computing: ESC</h1>
     <div className="container">
     <ESC111/>
     <ESC112/>
     <ESC113/>
     </div>
     <h1 classname="title">Others</h1>
     <div className="container">
     <TA111/>
     <LIF111/>
     </div></div>
  )
}

export default Home