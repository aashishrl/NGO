import React from 'react'
import { Link } from 'react-router-dom';

function Contributions() {
    return (
        <section className='contribution'>
            <div className="container">
                <div className="row align-items-center pb-5">
                    <div className="col-lg-4">
                        <div className="conbox1">
                            <div className="con-title mb-4">Essential contributions</div>
                            <h2 className='mb-4'>Choose the perfect help plan for you</h2>
                            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu maximus ante, eget sollicitudin metus. Sed fringilla efficitur fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
                            <Link className="conb-link">DETAILS</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 pe-0">
                        <div className="conbox2">
                            <div className="cb2img pt-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <p>Monthly</p>
                                    <p className='fw-bold fs-1'>$ 19.99</p>
                                    <p>RECURRING</p>
                                </div>
                                <div className="cb2overlay"></div>
                            </div>
                            <div className="cb2content p-5">
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Praesent ultrices urna purus</p>
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Sed vitae tristique nisl ultrices</p>
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Donec a ligula lacinia, consect</p>
                                <p className='mb-5'><i className="me-3 bi bi-check2"></i>Nunc scelerisque velit a pulvinar.</p>
                                <div className="text-center">
                                    <Link className="cb2-link cb3l">MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-0">
                        <div className="conbox2 conbox3">
                            <div className="cb2img cb3img pt-4">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <p>Single Cause</p>
                                    <p className='fw-bold fs-1'>$ 79.99</p>
                                    <p>ONE TIME</p>
                                </div>
                                <div className="cb2overlay cb3overlay"></div>
                            </div>
                            <div className="cb2content cb3content p-5">
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Nunc scelerisque velit a pulvinar.</p>
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Sed vitae tristique nisl ultrices</p>
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Praesent ultrices urna purus</p>
                                <p className='mb-3'><i className="me-3 bi bi-check2"></i>Donec a ligula lacinia, consect</p>
                                <p className='mb-5'><i className="me-3 bi bi-check2"></i>Sed vitae tristique nisl ultrices</p>
                                <div className="text-center">
                                    <Link className="cn2-link cb3-link">MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-6">
                        <div className="con2 ps-0">
                            <div className="c2content d-flex">
                                <img src="public\contribution-im1.png" width="105" alt="" />
                                <div className='img-con'>
                                    <h3 className='ic-h1'>Recurring Donations</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="con2 ps-0">
                        <div className="c2content d-flex">
                                <img src="public\contribution-im2.png" width="105" alt="" />
                                <div className='img-con'>
                                    <h3 className='ic-h2'>Ongoing Aid</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributions
