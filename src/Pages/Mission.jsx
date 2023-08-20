import React, { useState, useEffect } from 'react';

function Mission() {
    const [count, setCount] = useState(0);

    const counter = (minimum, maximum) => {
        let currentCount = minimum;
        const interval = setInterval(() => {
            setCount(currentCount);
            if (currentCount >= maximum) {
                clearInterval(interval);
            }
            currentCount++;
        }, 200);
    };

    useEffect(() => {
        counter(0, 50);
    }, []);
    return (
        <section className='mission'>
            <div className="mission-banner d-flex justify-content-center align-items-center">
                <h3>Our Mission</h3>
            </div>
            <div className="container py-5">
                <div className="row py-5 mb-5">
                    <div className="col-lg-6">
                        <p className=" m-p1">We started our journey from</p>
                        <p className="mb-4 con-title">A help to those who need it</p>
                        <p className=' m-p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  reiciendis Lorem ipsum dolor sit amet Perspiciatis consectetur, adipisicing elit. Quae, tempore!</p>
                    </div>
                    <div className="col-lg-6">
                        <p className='m-p2 m-date text-center'>1986</p>
                    </div>
                </div>
                <div className="row mb-5 pb-5">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="m-counter1 text-center">
                            <p className='counter'>{count}M</p>
                            <p className='m-p4'>LIVES SERVED</p>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-5 pb-5 row-gap-5">
                    <div className="col-lg-4">
                        <div className="m-box1">
                            <p className='mb-p1'>1</p>
                            <p className='mb-p2 mb-3'>EDUCATION</p>
                            <div className='mb-p3'>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>ipsum Lorem dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Consectetur ipsum sit dolor amet Lorem amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Amet Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://images.unsplash.com/photo-1511524511424-6fd4e055e7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMHRyaWJlJTIwc2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='object-fit-cover' height="370" width="100%" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <div className="m-box1">
                            <p className='mb-p1'>2</p>
                            <p className='mb-p2 mb-3'>HUMAN RIGHTS</p>
                            <div className='mb-p3'>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>ipsum Lorem dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Consectetur ipsum sit dolor amet Lorem amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Amet Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className='object-fit-cover' src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbiUyMHRyaWJlJTIwc2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height="370" width="100%" alt="" />
                    </div>                    
                    <div className="col-lg-4">
                        <div className="m-box1">
                            <p className='mb-p1'>3</p>
                            <p className='mb-p2 mb-3'>POVERTY</p>
                            <div className='mb-p3'>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>ipsum Lorem dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Consectetur ipsum sit dolor amet Lorem amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Amet Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className='object-fit-cover' src="https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjB0cmliZSUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" height="370" width="100%" alt="" />
                    </div>                  
                    <div className="col-lg-4">
                        <div className="m-box1">
                            <p className='mb-p1'>4</p>
                            <p className='mb-p2 mb-3'>HEALTH</p>
                            <div className='mb-p3'>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>ipsum Lorem dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Consectetur ipsum sit dolor amet Lorem amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Amet Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className='object-fit-cover' src="https://images.pexels.com/photos/5029598/pexels-photo-5029598.jpeg?auto=compress&cs=tinysrgb&w=400" height="370" width="100%" alt="" />
                    </div> 
                    <div className="col-lg-4">
                        <div className="m-box1">
                            <p className='mb-p1'>5</p>
                            <p className='mb-p2 mb-3'>WAR</p>
                            <div className='mb-p3'>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>ipsum Lorem dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Consectetur ipsum sit dolor amet Lorem amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Lorem ipsum dolor sit amet consectetur amet.</p>
                                <p className='d-flex align-items-center'><i className="me-2 mt-1 text-white bi bi-check2"></i>Amet Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
