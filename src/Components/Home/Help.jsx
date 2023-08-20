import React from 'react'
import { Link } from 'react-router-dom';

function Help() {
    return (
        <section className='help '>
            <div className="container">
                <div className='text-center'>
                    <h2 className='h-title mb-5'>You Can Help Us With:</h2>
                </div>
                <div className="row justify-content-between mb-5 pb-5">
                    <div className="h-icons col-lg-3 d-flex align-items-center gap-3 justify-content-start">
                        <i className="fa fa-medkit" aria-hidden="true"></i>
                        <p className='fw-bold'>MEDICINES</p>
                    </div>
                    <div className="h-icons col-lg-3 d-flex align-items-center gap-3 justify-content-center">
                        <i className="fa fa-stethoscope" aria-hidden="true"></i>
                        <p className='fw-bold'>MEDICAL AID</p>
                    </div>
                    <div className="h-icons col-lg-3 d-flex align-items-center gap-3 justify-content-end">
                        <i className="bi bi-piggy-bank-fill"></i>
                        <p className='fw-bold'>DONATIONS</p>
                    </div>
                    <div className="h-icons col-lg-3 d-flex align-items-center gap-3 justify-content-end">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <p className='fw-bold'>SKILLED</p>
                    </div>
                </div>
            </div>
            <div className="h-content pb-5 mb-5">
                <div className="container">
                    <div className='text-center'><h2 className='h-title mb-3'>A help to those who need it</h2></div>
                    <p className='hc-title2 text-center mb-5'>Each donation is an essential<br />help for everyone's life</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <img width="100%"  height="200" className='object-fit-cover' src="https://images.pexels.com/photos/16142883/pexels-photo-16142883/free-photo-of-young-boys-sitting-in-a-boat-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                            <div className="hb-content">
                                <Link to="/donate" className="hbc-donate">DONATE NOW</Link>
                                <h4 className='pb-2'>New Sustainability</h4>
                                <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                                <div className="d-flex mb-3 align-items-center">
                                    <div className='hbc-line1 flex-grow-1'></div>
                                    <p className='hbc-line2'>69%</p>
                                    <div className='hbc-line3'></div>
                                </div>
                                <div className="mb-4 d-flex justify-content-between hbc-p2">
                                    <p>GOAL : <span className='text-secondary'>1340 $</span></p>
                                    <p>RAISED : <span className='text-secondary'>925 $</span></p>
                                </div>
                                <Link className='hbc-link'>VIEW DETAILS</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img width="100%" height="200" className='object-fit-cover' src="https://images.pexels.com/photos/1686467/pexels-photo-1686467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                            <div className="hb-content">
                                <Link to="/donate" className="hbc-donate hbc2d">DONATE NOW</Link>
                                <h4 className='pb-2'>New Sustainability</h4>
                                <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                                <div className="d-flex mb-3 align-items-center">
                                    <div className='hbc-line1 hbc2l flex-grow-1'></div>
                                    <p className='hbc-line2 hbc2l2'>71%</p>
                                    <div className='hbc-line3 hbc2l3'></div>
                                </div>
                                <div className="mb-4 d-flex justify-content-between hbc-p2">
                                    <p>GOAL : <span className='text-secondary'>1340 $</span></p>
                                    <p>RAISED : <span className='text-secondary'>1000 $</span></p>
                                </div>
                                <Link className='hbc-link hbc2-l'>VIEW DETAILS</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hc-box3">
                                <div className="hcb-content">
                                    <p className='mb-5 pb-2'>Becomes a <br /><span>Volunteer</span></p>
                                    <div className="hcbc-img"><p>CLICK HERE</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help
