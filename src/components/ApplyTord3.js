import React, { Component } from 'react'

export class ApplyTord3 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg gothi-form-wrap-bg2 gothi-form-wrap-bg3 revert-color">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Introducer Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form gothi-signup-ride-form2" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="signup-form-group b-b">
                        <label className="label d-block mb-20">Upload Photo</label>
                        <div className="upload-thumbs d-flex align-items-center justify-content-start mb-20">
                          <img src={require('../images/upload_thumbs_img.jpg').default} className=" upload-thumbs-img upload-thumbs-img-type2 rounded-circle" alt="" id="rdIntroducerPhotoUpload" />
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <span className="upload-form">
                            <input type="file" name="file-input" id="rdIntroducerPhoto" className="file-input-photo " onchange="uploadImgHandler5(this)" />
                            <label className="file-input-photo-label" htmlFor="rdIntroducerPhoto">
                              <i className="fas fa-upload" />
                              <span>Browse File</span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div> {/* end Upload Rd introducer photo */}
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdIntroducerName" className="label">Introducer Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Introducer Full Name" id="rdIntroducerName" required />
                      </div>
                    </div>{/* end full name */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdIntroducerContractNO" className="label">Contract NO *</label>
                        <input type="tel" className="form-control signup-form" placeholder="Enter Introducer Contract NO" id="rdIntroducerContractNO" required />
                      </div>
                    </div>{/* end nominerelation */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="rdIntroducerAddress" className="label">Address *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Introducer Address" id="rdIntroducerAddress" required />
                      </div>
                    </div>{/* end nominee_address */}
                    <div className="col-lg-6 d-flex align-items-end">
                      <div className="signup-form-group gothi-form-group gothi-check-form">
                        <input type="checkbox" id="rdTermsCheck" />
                        <label htmlFor="rdTermsCheck">
                          <span className="ex-check">I Agree To Gothi's</span>
                          <a href="#">Terms &amp; Condition</a>
                        </label>
                      </div>
                    </div>{/* end check terms & condition */}
                    <div className="col-12 text-center mt-30">
                      <button type="submit" className="btn min-200">
                        Submit
                      </button>
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

export default ApplyTord3
