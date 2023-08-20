import React from 'react'
import {Link} from 'react-router-dom'; 

function Banner() {
  return (
    <section className='banner'>
      <div className="b-content">
        <p>WORLD MEETING<br />VOLUNTEERS<br />2020<br /></p>
        <h1 className=''>SAVE<br />WATER</h1>
        <Link to="/donate" className="b-donate text-decoration-none">DONATE <span className="bd-price">FROM<br /><span>$15</span></span></Link>
      </div>
    </section>
  )
}

export default Banner
