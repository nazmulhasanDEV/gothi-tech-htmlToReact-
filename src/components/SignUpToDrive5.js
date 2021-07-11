import React, { Component } from 'react'

export class SignUpToDrive5 extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper gothi-form-wrap-bg">
          <div className="container">
            <div className="row mb-20 text-center">
              <h3 className="gothi-form-title">
                <span> Owner Information</span>
              </h3>
            </div>{/* end row */}
            <div className="row">
              <div className="col-12">
                <form action="#" className="gothi-signup-ride-form" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleOwnerName" className="label">Owner Full Name *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Full Name" id="partnerVehicleOwnerName" name="partnerVehicleOwnerName" required />
                      </div>
                    </div>{/* end regnumber */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleOwnerNID" className="label">NID No *</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your NID NO" id="partnerVehicleOwnerNID" name="partnerVehicleOwnerNID" required />
                      </div>
                    </div>{/* end nid no  */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleOwnerTIN" className="label">TIN No </label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your TIN No" id="partnerVehicleOwnerTIN" name="partnerVehicleOwnerTIN" />
                      </div>
                    </div>{/* end tin no  */}
                    <div className="col-lg-6">
                      <div className="signup-form-group">
                        <label htmlFor="partnerVehicleOwnerAddress" className="label">Address</label>
                        <input type="text" className="form-control signup-form" placeholder="Enter Your Address" id="partnerVehicleOwnerAddress" name="partnerVehicleOwnerAddress" />
                      </div>
                    </div>{/* end address  */}
                    <div className="col-lg-6">
                      <div className="signup-form-group b-b">
                        <label className="label d-block mb-20">Upload Vehicle Owner NID</label>
                        <div className="upload-thumbs d-flex align-items-center justify-content-around mb-20">
                          <img src={require('../images/upload_thumbs_img.jpg').default} className=" upload-thumbs-img rounded" alt="" id="VehicleOwnerNidPhotoPart1" />
                          <img src={require('../images/upload_thumbs_img.jpg').default} className=" upload-thumbs-img rounded" alt="" id="VehicleOwnerNidPhotoPart2" />
                        </div>
                        <div className="d-flex align-items-center justify-content-around">
                          <span className="upload-form">
                            <input type="file" name="file-input" id="VehicleOwnerNidPhoto1" className="file-input-photo " onchange="uploadImgHandler1(this)" />
                            <label className="file-input-photo-label" htmlFor="VehicleOwnerNidPhoto1">
                              <i className="fas fa-upload" />
                              <span>Front Side</span>
                            </label>
                          </span>
                          <span className="upload-form">
                            <input type="file" name="file-input" id="VehicleOwnerNidPhoto2" className="file-input-photo " onchange="uploadImgHandler2(this)" />
                            <label className="file-input-photo-label" htmlFor="VehicleOwnerNidPhoto2">
                              <i className="fas fa-upload" />
                              <span>Back Side</span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>{/* end Upload Vehicle Owner NID */}
                    <div className="col-lg-6">
                      <div className="signup-form-group b-b">
                        <label className="label d-block mb-20">Upload Vehicle Registration</label>
                        <div className="upload-thumbs d-flex align-items-center justify-content-around mb-20">
                          <img src={require('../images/upload_thumbs_img.jpg').default} className=" upload-thumbs-img rounded" alt="" id="vehicleRegPhotoPart1" />
                          <img src={require('../images/upload_thumbs_img.jpg').default} className=" upload-thumbs-img rounded" alt="" id="vehicleRegPhotoPart2" />
                        </div>
                        <div className="d-flex align-items-center justify-content-around">
                          <span className="upload-form">
                            <input type="file" name="file-input" id="vehicleRegPhoto1" className="file-input-photo " onchange="uploadImgHandler3(this)" />
                            <label className="file-input-photo-label" htmlFor="vehicleRegPhoto1">
                              <i className="fas fa-upload" />
                              <span>Page 1</span>
                            </label>
                          </span>
                          <span className="upload-form">
                            <input type="file" name="file-input" id="vehicleRegPhoto2" className="file-input-photo " onchange="uploadImgHandler4(this)" />
                            <label className="file-input-photo-label" htmlFor="vehicleRegPhoto2">
                              <i className="fas fa-upload" />
                              <span>Page 2</span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>{/* end Upload Vehicle Owner NID */}
                    <div className="col-lg-6 mx-auto">
                      <div className="signup-form gothi-form-group gothi-check-form mb-0 text-center">
                        <input type="checkbox" id="driverTermsCheck" name="driverTermsCheck" />
                        <label htmlFor="driverTermsCheck">
                          <span>I Agree To Gothi's</span> <a href="#">Terms &amp; Condition</a>
                        </label>
                      </div>
                    </div>{/* end address  */}
                    <div className="col-12 text-center mt-30">
                      <div className="sigup-btn-group">
                        <button type="submit" className="btn min-200 me-3">
                          <i className="fas fa-arrow-left me-3" />
                          Go Back
                        </button>
                        <button type="submit" className="btn min-200 ms-3">
                          Submit
                        </button>
                      </div>
                    </div>{/* end col button */}
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

export default SignUpToDrive5
