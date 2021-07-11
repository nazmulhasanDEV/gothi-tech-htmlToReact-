import React, { Component } from 'react'

export class ApplyToAgent2 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg gothi-form-wrap-bg2 revert-color">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Nominee's Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form gothi-signup-ride-form2" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agentNomineeName" className="label">Nominee's Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Nominee's Full Name" id="agentNomineeName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetNomineeRelation" className="label">Relation *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Relation with Nominee's" id="agnetNomineeRelation" required />
                      </div>
                    </div>{/* end nominerelation */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetNomineeID" className="label">NID/passport/birth certificate NO
                          *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Nominee's NID Number" id="agnetNomineeID" required />
                      </div>
                    </div>{/* end nomine_id name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetNomineeAddress" className="label">Address *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Mobile Number" id="agnetNomineeAddress" required />
                      </div>
                    </div>{/* end nominee_address */}
                  </div>{/* end inner row */}
                  <div className="row  mt-40 ">
                    <h3 className="gothi-form-title mb-40 text-center">
                      <span> Introducer Information</span>
                    </h3>
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetIntroducerName" className="label">Introducer Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Introducer Full Name" id="agnetIntroducerName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetIntroducerContactNo" className="label">Contract NO *</label>
                        <input type="tel" className="form-control signup-form" placeholder="Enter Introducer Contract NO" id="agnetIntroducerContactNo" required />
                      </div>
                    </div>{/* end nominerelation */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="agnetIntroducerAddress" className="label">Address *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Introducer Address" id="agnetIntroducerAddress" required />
                      </div>
                    </div>{/* end nominee_address */}
                    <div className="col-lg-6 d-flex align-items-end">
                      <div className="signup-form-group gothi-form-group gothi-check-form">
                        <input type="checkbox" id="keepME" />
                        <label htmlFor="keepME">
                          <span className="ex-check">I Agree To Gothi's</span> <a href="#">Terms &amp;
                            Condition</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center mt-30">
                      <button type="submit" className="btn min-200">
                        Submit
                      </button>
                    </div>{/* end row */}
                  </div>{/* end row */}
                </form>{/* end form */}
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end gothi-login-wrapper */}
            </div>
        )
    }
}

export default ApplyToAgent2
