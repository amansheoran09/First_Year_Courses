import React from 'react'
import { Link } from 'react-router-dom'
const Esc111Content = () => {
    return (
        <>
        <h1 className='heading'>ESC111</h1> <div className='container'><Link to="/esc111/AMresourses" className='link'><button className="card">AM Class Slides</button></Link>
            <Link to="/esc111/pp" className='link'><button className="card">Practice Problems</button></Link>
            <Link to="/esc111/pyq" className='link'><button className="card">PYQs</button></Link></div></>

    )
}

export default Esc111Content