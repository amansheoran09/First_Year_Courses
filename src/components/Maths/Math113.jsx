import React from 'react'
import { Link } from 'react-router-dom'
const Math113 = () => {
  return (
    <>
      <h1>MTH113</h1>
      <div className='container'>
        <Link to="https://drive.google.com/drive/u/0/folders/1VPO45Ljo7DkFm-uuVlZk_bW0vce0KRce" target='_blank' className='link'><button className="card">Y19</button></Link>
        <Link to="https://drive.google.com/drive/u/0/folders/1VPO45Ljo7DkFm-uuVlZk_bW0vce0KRce" target='_blank' className='link'><button className="card">Y20</button></Link>
        <Link to="https://drive.google.com/drive/u/0/folders/1238sDLfR_EnrzcoJiE4lF-Cm90QhjWc5" target='_blank' className='link'><button className="card">Y22</button></Link>
        <Link to="https://drive.google.com/drive/u/0/folders/1GiQx61iYt_YnFqx5DvBnt4bOYDi_kAO5" target='_blank' className='link'><button className="card">Y23</button></Link>

        <Link to="https://drive.google.com/drive/u/0/folders/1XKIzMLt1i9EvhEEMw3vU-a7ixCnbdKRe" target='_blank' className='link'><button className='card'>AM Resourses</button></Link>
      </div></>

  )
}

export default Math113