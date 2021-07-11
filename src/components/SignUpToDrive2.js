import React, { Component } from 'react'

export class SignUpToDrive2 extends Component {
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
                      <div className="signup-form-group">
                        <label htmlFor="partnerName" className="label">Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Full Name" id="partnerName" name="partnerName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerNickname" className="label">Nickname</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Nickname Here" id="partnerNickname" name="partnerNickname" />
                      </div>
                    </div>{/* end nick name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerLicense" className="label">Driving License No *</label>
                        <input type="text" className="form-control signup-form" placeholder="e.g : SL00XXXXXXXXX" id="partnerLicense" name="partnerLicense" required />
                      </div>
                    </div>{/* end License no */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerEmail" className="label">Email *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Email Name" id="partnerEmail" name="partnerEmail" required />
                      </div>
                    </div>{/* end email */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerNid" className="label">NID </label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your NID" id="partnerNid" name="partnerNid" required />
                      </div>
                    </div>{/* end NID */}
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
                        <label htmlFor="partnerPassword1" className="label">Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="************" id="partnerPassword1" name="partnerPassword1" />
                      </div>
                    </div>{/* end password */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerPassword2" className="label">Retype Password *</label>
                        <input type="text" className="form-control signup-form" placeholder="************" id="partnerPassword2" name="partnerPassword2" />
                      </div>
                    </div>{/* end password2 */}
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

export default SignUpToDrive2
