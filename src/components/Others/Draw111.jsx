import React from 'react'
import { Link } from 'react-router-dom'
const Draw111 = () => {
    return (
        <> 
        <h1 className='heading'>TA111</h1>
         <div className='container'> <Link to="https://drive.google.com/drive/u/0/folders/1baUDp3Y-kA7fVj86uoP3N7GGReKB4dV5" target='_blank' className='link'><button className="card">Guides by our AMs</button></Link>
            <Link to="https://drive.google.com/drive/u/0/folders/1dQ3iwmoEED6CWfh0DMAqriLDStyEq5_J" target='_blank' className='link'><button className="card">Practice Questions</button></Link>
            <Link to="/ta111/pyq" target='_blank' className='link'><button className="card">PYQs</button></Link>
        </div></>
      
    )
}

export default Draw111