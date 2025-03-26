import React from 'react'
import { Link } from 'react-router-dom'
const PP = () => {
    return (
        <>
        <h1 className="heading">Practice Problems</h1>
        <div className='container'><div><Link to="https://drive.google.com/file/d/1itYgGc2-dJwTvFJUKQlEeDwq1E2uchLR/view" target='_blank'className='link'><button className='btn'></button></Link>
        <h2>AM Practice Set 1</h2></div>
        <div><Link to="https://drive.google.com/file/d/1YWaQF24QZhtZe7SvgHnEJuvSKDBsdIn_/view" target='_blank'className='link'><button className='btn'></button></Link>
        <h2>AM Practice Set 2</h2></div>
        <div><Link to="https://drive.google.com/file/d/1ik7mrbXbLTGHNUP6g6k973gNCWLxO78_/view" target='_blank'className='link'><button className='btn'></button></Link>
        <h2>AM Practice Set 3</h2></div>
            </div>
            </>
    )
}

export default PP