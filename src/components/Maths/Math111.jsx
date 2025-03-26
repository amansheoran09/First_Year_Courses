import React from 'react'

import { Link } from 'react-router-dom'
const Math111 = () => {
  return (<>
    <h1 className='heading'>MTH111</h1>
    <div className='container'>
      <Link to="/math111/pyq" className='link'><button className="card">PYQs</button></Link>
      <Link to="/math111/pp" target='_blank' className='link'><button className="card">Practice Problems</button></Link>
      <Link to="https://drive.google.com/drive/u/0/folders/1FCurrQa0e7-lzH7W4FU7qs0IGeO8irzh" target='_blank' className='link'><button className='card'>AM Resourses</button></Link>
    </div>
    </>
  )
}

export default Math111