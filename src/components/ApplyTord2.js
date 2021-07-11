import React, { Component } from 'react'

export class ApplyTord2 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg  gothi-form-wrap-bg2 gothi-form-wrap-bg3 revert-color">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Profession Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form gothi-signup-ride-form2" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdProfession" className="label">Name of Profession *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Profession Name Here" id="rdProfession" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdProfessionAddress" className="label">Profession Address *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Profession Address  Here" id="rdProfessionAddress" required />
                      </div>
                    </div>{/* end nominerelation */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdProfessionId" className="label">Profession ID/Trade License NO *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your ID NO" id="rdProfessionId" required />
                      </div>
                    </div>{/* end nomine_id name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdProfessionContactNo" className="label">Contract Number *</label>
                        <input type="tel" className="form-control signup-form" placeholder="Enter Your Contact Number" id="rdProfessionContactNo" required />
                      </div>
                    </div>{/* end nominee_address */}
                  </div>{/* end inner row */}
                  <div className="row  mt-40 ">
                    <h3 className="gothi-form-title mb-40 text-center">
                      <span> Nominee's Information</span>
                    </h3>
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNomineeName" className="label">Nominee's Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Nominee Full Name" id="rdNomineeName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNomineeRelation" className="label">Relation *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Relation With Nominee's Here" id="rdNomineeRelation" required />
                      </div>
                    </div>{/* end nominerelation */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNomineeIDNO" className="label">NID/Passport/Birth certificate NO *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your ID NO" id="rdNomineeIDNO" required />
                      </div>
                    </div>{/* end nomine_id name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdNomineeAddress" className="label">Address *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Nominee Address" id="rdNomineeAddress" required />
                      </div>
                    </div>{/* end nominee_address */}
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

export default ApplyTord2
