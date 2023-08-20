import React from 'react'

function Footer() {
    return (
        <section className='pt-5 footer'>
            <div className="container pb-5">
                <div className="row text-white">
                    <div className="col-lg-4">
                        <h4 className='mb-4 mt-3 fw-bold'>CONTACTS</h4>
                        <ul>
                            <li className='mb-3'><i className="me-1 bi bi-geo"></i> Pepsicola-32 Kathmandu, Nepal</li>
                            <li className='mb-3'><i className="me-1 bi bi-telephone"></i> Office 01 1000000</li>
                            <li className='mb-3'><i className="me-1 bi bi-envelope-paper"></i> ngo@gmail.com</li>
                            <li className='mb-3'><i className="me-1 bi bi-clock-history"></i> 10 am - 06 pm Saturday closed</li>
                        </ul>
                    </div>
                    <div className="ms-5 md-ms-0 col-lg-4">
                        <h4 className='mb-4 mt-3 fw-bold'>SUBSCRIBE</h4>
                        <form action="">
                            <input type="email" placeholder='Email Address' className='mb-3' />
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
                <div className="f-bottom bg-dark text-center py-2">
                    <p className='text-white'>© AASHISH Rl</p>
                </div>
        </section>
    )
}

export default Footer
