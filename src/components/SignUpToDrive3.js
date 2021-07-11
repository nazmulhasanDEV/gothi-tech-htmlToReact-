import React, { Component } from 'react'

export class SignUpToDrive3 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Partner Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label">
                          Driving License Class*
                        </label>
                        <ul className="gothi-check-form radio-form signup-form">
                          <li>
                            <input type="radio" id="private" name="licenseClass" />
                            <label htmlFor="private">Private</label>
                          </li>
                          <li>
                            <input type="radio" id="professional" name="licenseClass" />
                            <label htmlFor="professional">Professional</label>
                          </li>
                        </ul>
                      </div>
                    </div>{/* end license class */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label">
                          Select One *
                        </label>
                        <ul className="gothi-check-form radio-form signup-form">
                          <li>
                            <input type="radio" id="vehicle" name="vehiclecheck" />
                            <label htmlFor="vehicle">I have a vehicle</label>
                          </li>
                          <li>
                            <input type="radio" id="novehicle" name="vehiclecheck" />
                            <label htmlFor="novehicle">I have no vehicle</label>
                          </li>
                        </ul>
                      </div>
                    </div>{/* end vechile check */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label d-block">
                          Service City/Area/District *
                        </label>
                        {/* <select class="form-control gothi-select-form">
                                          <option selected>Select Your Area</option>
                                          <option value="1">Dhaka</option>
                                          <option value="2">Sylhet</option>
                                          <option value="3">Chattogram </option>
                                      </select> */}
                        <select className="form-control gothi-select-form">
                          <option selected>Select Ride Category</option>
                          <option value={1}>Scooter</option>
                          <option value={2}>Bike</option>
                          <option value={3}>Car</option>
                          <option value={4}>Cng</option>
                        </select>
                      </div>
                    </div>{/* end vechile check */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerAgentId" className="label">Agent ID *</label>
                        <input type="text" className="form-control signup-form" placeholder="e.g: A01834619080 " id="partnerAgentId" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerAddress" className="label">
                          Address * (According To The Driving License)
                        </label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your address" id="partnerAddress" name="partnerAddress" required />
                      </div>
                    </div>{/* end nick name */}
                    <div className="col-12 text-center mt-30">
                      <div className="sigup-btn-group">
                        <button type="submit" className="btn min-200 me-3">
                          <i className="fas fa-arrow-left me-3" />
                          Go Back
                        </button>
                        <button type="submit" className="btn min-200 ms-3">
                          Next Step
                          <i className="fas fa-arrow-right ms-3" />
                        </button>
                      </div>
                    </div>{/* end col */}
                  </div>{/* end inner row */}
                </form>{/* end form */}
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end gothi-login-wrapper */}
            </div>
        )
    }
}

export default SignUpToDrive3
