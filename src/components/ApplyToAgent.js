import React, { Component } from 'react'

export class ApplyToAgent extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg gothi-form-wrap-bg2 revert-color">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Personal Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form gothi-signup-ride-form2 " autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agentName" className="label">Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Full Name" id="agentName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agentNickname" className="label">Nickname *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Nickname Here" id="agentNickname" required />
                      </div>
                    </div>{/* end nick name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agentMobileNO" className="label">Mobile Number *</label>
                        <input type="tel" className="form-control signup-form" placeholder="Enter Your Mobile Number" id="agentMobileNO" required />
                      </div>
                    </div>{/* end mobile no */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetNidOrPassport" className="label">NID/Passport NO *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your NID/Passport No" id="agnetNidOrPassport" required />
                      </div>
                    </div>{/* end nid_passport */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetPassword1" className="label">Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="**********" id="agnetPassword1" />
                      </div>
                    </div>{/* end password */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetPassword2" className="label">Retype Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="**********" id="agnetPassword2" />
                      </div>
                    </div>{/* end password2 */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agentAddress" className="label">address * (according to the NID)</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Address" id="agentAddress" required />
                      </div>
                    </div>{/* end email */}
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
                        <label htmlFor="agnetRdId" className="label">RD ID NO *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your RD ID" id="agnetRdId" required />
                      </div>
                    </div>{/* end rd_id */}
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

export default ApplyToAgent
