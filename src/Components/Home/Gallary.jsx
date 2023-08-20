import React from 'react'

function Gallary() {
    return (
        <section className='gallary'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="g-b1">
                            <p className='g-title fw-bold fs-1 mb-4'>Look at our latest Causes</p>
                            <p className='mb-4 g-p1'>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus lacinia.
                                Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
                            <p className='g-p2'>DETAILS</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className='object-fit-cover' height="600" src="https://images.pexels.com/photos/8820463/pexels-photo-8820463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" alt="" />
                    </div>
                </div>
                <div className="g-pics">
                    <div className="d-flex gap-4">
                        <div className='g-img1'>
                            <img height="190" width="190" className='object-fit-cover' src="https://images.pexels.com/photos/10533753/pexels-photo-10533753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>HUNGER</p>
                        </div>
                        <div className="g-img1">
                            <img height="190" width="190" className='object-fit-cover' src="https://images.pexels.com/photos/12215390/pexels-photo-12215390.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                            <p>POVERTY</p>
                        </div>
                        <div className="g-img1">
                            <img height="190" width="190" className='object-fit-cover' src="https://images.pexels.com/photos/12215393/pexels-photo-12215393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>HOME</p>
                        </div>
                        <div className="g-img1">
                            <img height="190" width="190" className='object-fit-cover' src="https://images.pexels.com/photos/14381967/pexels-photo-14381967.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                            <p>LIFE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallary
