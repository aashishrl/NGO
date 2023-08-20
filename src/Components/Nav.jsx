import React from 'react'
import {Link} from 'react-router-dom' 

function Nav() {
  return (
    <section className='py-1 nav'>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-3">
              <Link className='logo-link' to="/">
                <span className='logo1'>N</span><span className='logo2'>G</span><span className='logo3'>O</span>
              </Link>
            </div>
            <div className="col-lg-6">
                <ul className='d-flex gap-5'>
                    <li><Link to='/' className='text-decoration-none n-link'>Home</Link></li>
                    <li><Link to='/mission' className='text-decoration-none n-link'>Mission</Link></li>
                    <li><Link to='events' className='text-decoration-none n-link'>Events</Link></li>
                    <li><Link to='/team' className='text-decoration-none n-link'>Team</Link></li>
                    <li><Link to='contact' className='text-decoration-none n-link'>Contact</Link></li>
                </ul>
            </div>
            <div className="col-lg-2 offset-1 text-end">
                <Link to="/donate" className='n-donate text-decoration-none'>DONATE</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Nav
