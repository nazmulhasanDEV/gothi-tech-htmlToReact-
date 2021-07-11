import React, { Component } from 'react';

export class ApplyTord extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg  gothi-form-wrap-bg2 gothi-form-wrap-bg3 revert-color">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Personal Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form gothi-signup-ride-form2 gothi-signup-ride-form3 " autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdName" className="label">Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Full Name" id="rdName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdMobileNo" className="label">Mobile Number *</label>
                        <input type="tel" className="form-control signup-form" placeholder="Enter Your Mobile Number" id="rdMobileNo" required />
                      </div>
                    </div>{/* end mobile no */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdPassword1" className="label">Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="**********" id="rdPassword1" />
                      </div>
                    </div>{/* end password */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdPassword2" className="label">Retype Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="**********" id="rdPassword2" />
                      </div>
                    </div>{/* end password2 */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNidOrPassport" className="label">NID/Passport NO *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your NID/Passport No" id="rdNidOrPassport" required />
                      </div>
                    </div>{/* end nid/passport */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNationality" className="label">Nationality *</label>
                        <input type="text" className="form-control signup-form" placeholder="Nationality" id="rdNationality" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label d-block">
                          Service City/Area/District *
                        </label>
                        <select className="form-control gothi-select-form">
                          <option selected>Select Your Area</option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Sylhet</option>
                          <option value={3}>Chattogram </option>
                        </select>
                      </div>
                    </div>{/* end select area */}
                    <div className="col-lg-6">
                      <div className="signup-form-group ">
                        <label className="label">
                          Gender <i className="fas fa-chevron-circle-down drop-icon" />
                        </label>
                        <ul className="gothi-check-form radio-form signup-form">
                          <li>
                            <input type="radio" id="male" name="gender" />
                            <label htmlFor="male">Male</label>
                          </li>
                          <li>
                            <input type="radio" id="female" name="gender" />
                            <label htmlFor="female">Female</label>
                          </li>
                          <li className="me-0">
                            <input type="radio" id="others" name="gender" />
                            <label htmlFor="others">Others</label>
                          </li>
                        </ul>
                      </div>
                    </div>{/* end gender */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdAddress" className="label">Address * (according to the NID)</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Address" id="rdAddress" required />
                      </div>
                    </div>{/* end address */}
                    <div className="col-12 text-center mt-30">
                      <button type="submit" className="btn min-200">
                        Next Step
                        <i className="fas fa-arrow-right ms-3" />
                      </button>
                    </div>{/* end row */}
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

export default ApplyTord
