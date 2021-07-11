import React, { Component } from 'react'

export class SignUpToDrive4 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Vehicle Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleRegNo" className="label">Registration Number *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Registration Number " id="partnerVehicleRegNo" name="partnerVehicleRegNo" required />
                      </div>
                    </div>{/* end regnumber */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleEngineNo" className="label">Engine Number *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Engine Number" id="partnerVehicleEngineNo" name="partnerVehicleEngineNo" required />
                      </div>
                    </div>{/* end enginenumber */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label d-block">
                          Select Ride *
                        </label>
                        <select className="form-control gothi-select-form">
                          <option selected>Select Your Ride</option>
                          <option value={1}>Moto</option>
                          <option value={2}>Car</option>
                          <option value={3}>Micro </option>
                          <option value={4}>3 Wheeler</option>
                        </select>
                      </div>
                    </div>{/* end Select Ride */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label d-block">
                          Select Ride Category *
                        </label>
                        {/* <select class=" form-select form-control signup-form cs-select-icon">
                                          <option selected>Select Ride Category</option>
                                          <option value="1">Scooter</option>
                                          <option value="2">Bike</option>
                                          <option value="3">Car</option>
                                          <option value="4">Cng</option>
                                      </select> */}
                        <select className="form-control gothi-select-form">
                          <option selected>Select Ride Category</option>
                          <option value={1}>Scooter</option>
                          <option value={2}>Bike</option>
                          <option value={3}>Car</option>
                          <option value={4}>Cng</option>
                        </select>
                      </div>
                    </div>{/* end Select Ride Category */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleChassisNo" className="label">
                          Chassis Number
                        </label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Chassis Number" id="partnerVehicleChassisNo" name="partnerVehicleChassisNo" />
                      </div>
                    </div>{/* end Chassis Number */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label d-block">
                          Sit Capacity Without Driver *
                        </label>
                        <select className="form-control gothi-select-form">
                          <option selected>Select Sit Capacity</option>
                          <option value={1}>2</option>
                          <option value={2}>4</option>
                          <option value={3}>6</option>
                        </select>
                      </div>
                    </div>{/* end Chassis Number */}
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

export default SignUpToDrive4
