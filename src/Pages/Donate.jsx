import React from 'react'
import CountryData from '../Data/CountryData'

function Donate() {
    return (
        <section className='donate'>
            <div className="d-box">
                <div className="row">
                    <h3>PERSONAL INFORMATION</h3>
                    <div className="col-lg-12">
                        <form>
                            <div className='mb-4 d'>
                                <input name='first-name' className='i-hw f-name' type="text" placeholder="First Name" required /><span className='fn-span text-danger'>*</span>
                                <input name='last-name' className='i-hw' type="text" placeholder='Last Name' />
                            </div>
                            <div className='mb-4'>
                                <input className='i-fw' type="email" placeholder='Email Address' name='email' required /><span className='email-span text-danger'>*</span>
                            </div>
                            <div className="mb-4 select">
                                <select name='country'>
                                    <option value="country">Country</option>
                                    {CountryData.map(a => (
                                        <option value={a.name}>{a.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-5 d'>
                                <input name='city' className='i-hw f-name' type="text" placeholder="City" required />
                                <input name='town' className='i-hw' type="text" placeholder='Town' />
                            </div>
                            <h3 className='mb-5'>DONATION DEATILS</h3>
                            <div className='mb-5 d'>
                                <input name='amount' className='i-hw amount' type="text" placeholder="Amount" required />
                                <div className="i-hw select">
                                    <select name='frequency'>
                                        <option value="Frequency">Frequency</option>
                                        <option value="Once">Once</option>
                                        <option value="Weekely">Weekely</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Annually">Annually</option>

                                    </select>
                                </div>
                            </div>
                            <h3 className='mb-5'>PAYMENT DETAILS</h3>
                            <div className='mb-4 d'>
                                <input className='i-hw' type="text" placeholder='Card Number' name='card-number' required /><span className='email-span text-danger'>*</span>
                                <input className='i-hw' type="text" placeholder='CV Code' name='cv-code' required /><span className='email-span text-danger'>*</span>
                            </div>
                            <div className='mb-4 d'>
                                <input className='i-hw' type="text" placeholder='Card Holder Name' name='card-holder-name' required /><span className='email-span text-danger'>*</span>
                                <input className='i-hw' type="text" placeholder='Expiration Date' name='expiry-date' required /><span className='email-span text-danger'>*</span>
                            </div>
                            <div>
                                <input className='me-1 mb-3' type="checkbox" name='email receipt' value="yes"/> <span>Email me the Receipt </span>
                            </div>
                            <button>DONATE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate
