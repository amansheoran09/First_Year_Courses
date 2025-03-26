import React from 'react'
import { Link } from 'react-router-dom'

const PYQ = () => {
  return (
    <>
      <h1 className='heading'>PYQs</h1>
      <div className='container'>
        <Link to="https://drive.google.com/drive/u/0/folders/1SKaGrYb6xysC_cjDCkJf65q1fuBOUH6e" target='_blank' className='link'><button className="card">2009-2020</button></Link>
        <Link to="https://drive.google.com/drive/u/0/folders/1B1zEmP8GqeS6IGwVEJA7uLsaAUx51txe" target='_blank' className='link'><button className="card">2021-2023</button></Link>
      </div>
    </>
  )
}

export default PYQ