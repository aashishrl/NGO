import React from 'react'

function Contact() {
    return (
        <section className='contact'>
            <div className="contact-banner d-flex justify-content-center align-items-center">
                <h3>Contact</h3>
            </div>
            <div className="container">
                <div className="row c-img">
                    <div className="col-lg-6">
                        <div className="con2 ps-0">
                            <div className="c2content d-flex">
                                <img src="public\contibution-img1.png" width="105" alt="" />
                                <div className='img-con'>
                                    <h3 className='ic-h1'>Give With Love</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="con2 ps-0">
                            <div className="c2content d-flex">
                                <img src="public\contibution-img2.png" width="105" alt="" />
                                <div className='img-con'>
                                    <h3 className='ic-h2'>Help Many People</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-form row align-items-center">
                    <div className="col-lg-5">
                        <p className="mb-4 con-title">Get in Touch With Us</p>
                        <p className='mb-4 cp-2'>Contact Us for any questions !</p>
                        <p className='mb-4 cp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu maximus ante, eget sollicitudin metus. Sed fringilla efficitur fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
                    </div>
                    <div className="col-lg-6 offset-1">
                        <form>
                            <div>
                                <input type="text"  placeholder='Name'/>
                            </div>
                            <div>
                                <input type="email"  placeholder='Email'/>
                            </div>
                            <div className='mb-3'>
                                <textarea placeholder='Message'/>
                            </div>
                            <button>SEND QUERY</button>
                        </form>
                    </div>
                </div>
            </div>                     
        </section>
    )
}

export default Contact
