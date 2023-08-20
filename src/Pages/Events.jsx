import React from 'react'

function Events() {
    return (
        <section className='events'>
            <div className="event-banner d-flex justify-content-center align-items-center">
                <h3>Our Events</h3>
            </div>
            <div className="container py-5">
                <div className="row row-gap-5">
                    <div className="col-lg-12">
                        <div className="e-box d-flex gap-5">
                            <p className="date text-center"><span className='fw-bold fs-2'>1</span></p>
                            <div>
                                <p className='mb-3 e-p1'>MAY 1, 2025 @ 8:00 AM - 5:00 PM</p>
                                <p className='mb-3 e-p2'>Live testimonials</p>
                                <p className='mb-3 e-p3'>Nulla molestie et nisi nec scelerisque. Mauris felis erat, sodales in pellentesque sit amet, elementum ac mi. Nulla volutpat id lorem id tempor. Aliquam sed dolor velit. Morbi lobortis nulla eu.</p>
                                <p></p>
                            </div>
                            <img className='object-fit-cover' src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600" width="280" height="180" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="e-box d-flex gap-5">
                            <p className="date text-center"><span className='fw-bold fs-2'>2</span></p>
                            <div>

                                <p className='mb-3 e-p1'>MAY 1, 2025 @ 8:00 AM - 5:00 PM</p>
                                <p className='mb-3 e-p2'>Funds research</p>
                                <p className='mb-3 e-p3'>Fusce lacinia sodales gravida. Pellentesque pellentesque tristique bibendum. Morbi sagittis porttitor congue. Suspendisse varius elementum est. Phasellus dictum est ac risus posuereeg.</p>
                                <p></p>
                            </div>
                            <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600" width="280" height="180" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="e-box d-flex gap-5">
                            <p className="date text-center"><span className='fw-bold fs-2'>3</span></p>
                            <div>
                                <p className='mb-3 e-p1'>MAY 1, 2025 @ 8:00 AM - 5:00 PM</p>
                                <p className='mb-3 e-p2'>Presentation</p>
                                <p className='mb-3 e-p3'>Nulla molestie et nisi nec scelerisque. Mauris felis erat, sodales in pellentesque sit amet, elementum ac mi. Nulla volutpat id lorem id tempor. Aliquam sed dolor velit. Morbi lobortis nulla eu.</p>
                                <p></p>
                            </div>
                            <img src="https://images.pexels.com/photos/8349230/pexels-photo-8349230.jpeg?auto=compress&cs=tinysrgb&w=600" width="280" height="180" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events
