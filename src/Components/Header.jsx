import React from 'react'

function Header() {
    return (
        <section className='py-2 header'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex gap-4 align-items-center">
                        <p><i className="bi bi-envelope-open"></i> info@donations.com</p>
                        <p><i className="bi bi-clock-history"></i> Mon - Sat: 08.00 am - 05:00</p>
                    </div>
                    <div className="col-lg-6 text-end d-flex justify-content-end gap-4 align-items-center">
                        <div className='d-flex gap-4 align-items-center'>
                            <p>Pepsicola-32,KTM</p>
                            <i className="fa fa-instagram" aria-hidden="true" />
                            <i className="fa fa-twitter" aria-hidden="true" />
                            <i className="fa fa-facebook" aria-hidden="true" />
                            <i className="fa fa-youtube-play" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
