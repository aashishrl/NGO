import React from 'react'

function Info() {
    return (
        <section className='info'>
            <div className="container-fluid m-0 ps-0">
                <div className="row">
                    <div className="p-0 col-lg-8">
                        <img src="https://images.pexels.com/photos/11729854/pexels-photo-11729854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" height="100%" alt="" />
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center justify-content-center flex-column i-box2 p-5 text-white">                            
                        <div>
                            <h3 className="con-title mb-4" style={{borderLeftColor:"white"}}>Each drop creates the sea</h3>
                            <h2 className='mb-4'>A concrete<br />help for the<br />causes</h2>
                            <p className='i-p1 mb-4'>Donec id blandit ante. Duis maximus, est<br />quis ultricies euismod, nunc ante<br />vulputate ex, nec volutpat risus risus in<br />ipsum. Sed at purus diam.</p>
                            <div className='d-flex justify-content-start mb-4'>
                                <p className="i-p2 text-dark">Recu... 45%</p>
                                <p className="i-p3"></p>
                            </div>
                            <div className='mb-4 d-flex justify-content-start'>
                                <p className="i-p2 text-dark">One-time donations 86%</p>
                                <p className="i-p3" style={{width:"22.5%"}}></p>
                            </div>
                            <p className='i-p4'>MORE INFO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
