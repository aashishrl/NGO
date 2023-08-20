import React from 'react'
import { Link } from 'react-router-dom'

function Updates() {
    return (
        <section className=' updates'>
            <div className="container">
                <div className='text-center'>
                    <h3 className='con-title'>Stay informed with us</h3>
                    <h2 className='fw-bold fs-1 mt-4 mb-3'>All our latest news and updates</h2>
                    <p className='ct-p mb-5'>Donec pellentesque nunc sed neque congue, ut lobortis odio sollicitudin. <br />Curabitur orci orci, maximus nec sodales vitae, tristique</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row row-gap-4">
                            <div className="col-lg-12">
                                <img width="100%" src="https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="ub-content p-4 pb-5">
                                    <p className="ubc-rel"><span className='fw-bold fs-4'>19</span><br />MAY</p>
                                    <p className="ub-title">PROJECTS</p>
                                    <p className='ub-p mb-3'>New Mission</p>
                                    <p className="ub-p2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <img className='me-2 object-fit-cover rounded-circle' src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600" height="50" width="50" alt="" />
                                            <small className='text-secondary'>Nick Hardy</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <i className="fs-3 fa fa-commenting-o text-secondary" aria-hidden="true"></i>
                                            <small className='text-secondary'>2 Comments</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ub-4 p-5 d-flex align-items-end">
                                    <div>
                                        <p className='con-title text-white fs-5'>PROJECTS</p>
                                        <p className='fs-3 fw-bold text-white'>Ongoing Donations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 overflow-hidden">
                        <div className="row row-gap-4">
                            <div className="col-lg-12">
                                <div className="u-b2 p-5 pt-5">
                                    <div className="text-center ub2-content  d-flex flex-column justify-content-center align-items-center">
                                        <p className='ub2c-p'>If you want to help the poor, then Don't be one of them.</p>
                                        <p className='ub2c-p2 mt-3'>LYNETTE CARTER</p>
                                        <p className='ub2c-p3 fs-2'><i class="bi bi-quote"></i></p>
                                    </div>
                                    <div className="ub2-overlay"></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <img width="100%" src="https://images.pexels.com/photos/4314674/pexels-photo-4314674.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="ub-content p-4 pb-5">
                                    <p className="ubc-rel" style={{background:"#22B6AF"}}><span className='fw-bold fs-4'>10</span><br />DEC</p>
                                    <p className="ub-title" style={{borderLeftColor:"#22B6AF"}}>PROJECTS</p>
                                    <p className='ub-p mb-3'>Plans for the Future</p>
                                    <p className="ub-p2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <img className='me-2 object-fit-cover rounded-circle' src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" height="50" width="50" alt="" />
                                            <small className='text-secondary'>Grace Shelby</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <i className="fs-3 fa fa-commenting-o text-secondary" aria-hidden="true"></i>
                                            <small className='text-secondary'>2 Comments</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12" style={{height:"196px"}}>
                                <div className='p-overlay'>
                                    <Link to="/donate">
                                        <img height="100%" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9uYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" width="100%" alt="" />
                                        <div className="l-overlay"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row row-gap-4">
                            <div className="col-lg-12">
                                <div className="ub-3 p-5 d-flex align-items-end">
                                    <div>
                                        <p className='con-title text-white fs-5'>PROJECTS</p>
                                        <p className='fs-3 text-dark fw-bold'>Results Achieved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <img width="100%" src="https://images.pexels.com/photos/12823580/pexels-photo-12823580.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="ub-content p-4 pb-5">
                                    <p className="ubc-rel" style={{background:"#2272b6"}}><span className='fw-bold fs-4'>22</span><br />JUNE</p>
                                    <p className="ub-title" style={{borderLeftColor:"#2272b6"}}>PROJECTS</p>
                                    <p className='ub-p mb-3 '>Help the Comunity</p>
                                    <p className="ub-p2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <img className='me-2 object-fit-cover rounded-circle' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height="50" width="50" alt="" />
                                            <small className='text-secondary'>Sofi Malik</small>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <i className="fs-3 fa fa-commenting-o text-secondary" aria-hidden="true"></i>
                                            <small className='text-secondary'>4 Comments</small>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Updates
