import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class SignUpToRide extends Component {
    render() {
        return (
            <div>
                {/* start gothi-login-wrapper */}
        <div className="gothi-login-wrapper signup-wrapper">
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-lg-6 col-md-8 mx-md-auto">
                <div className="gothi-message-box message-box2">
                  <h2 className="message">
                    <span> Be A Part Of</span>
                    Our Awesome Ride Sharing Platfrom
                  </h2>
                </div>

                {/* <div class="gothi-ride-thumbs-slider owl-carousel owl-theme"> */}
                <OwlCarousel 
                className="gothi-ride-thumbs-slider gothi-owl-carousel owl-carousel owl-theme"
                items={1}
                loop={true} 
                loop={true}
                autoplay={true}
                autoplayTimeout={3000}
                smartSpeed= {1000}
                >
                  <div className="single-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={260} height={260} viewBox="0 0 369.72 278.487">
                      <path d="M356.094,84.267h-42.64L301.6,54.639A79.363,79.363,0,0,0,227.547,4.5H137.1A79.386,79.386,0,0,0,63.035,54.639L51.184,84.267H8.551A8.543,8.543,0,0,0,.261,94.886l4.273,17.093a8.541,8.541,0,0,0,8.29,6.474H27.118a45.263,45.263,0,0,0-15.726,34.186v34.186a45.21,45.21,0,0,0,11.4,29.863V255.2a22.793,22.793,0,0,0,22.791,22.791H68.369A22.793,22.793,0,0,0,91.16,255.2V232.406H273.485V255.2a22.793,22.793,0,0,0,22.791,22.791h22.791A22.793,22.793,0,0,0,341.857,255.2V216.688a45.182,45.182,0,0,0,11.4-29.863V152.639a45.281,45.281,0,0,0-15.718-34.186h14.294a8.541,8.541,0,0,0,8.29-6.474l4.273-17.093a8.551,8.551,0,0,0-8.3-10.619Zm-250.739-12.7A34.189,34.189,0,0,1,137.1,50.081h90.45A34.189,34.189,0,0,1,259.29,71.568l14.194,35.489H91.16l14.194-35.489ZM68.369,186.682c-13.674,0-22.791-9.088-22.791-22.719s9.116-22.719,22.791-22.719,34.186,20.447,34.186,34.079S82.044,186.682,68.369,186.682Zm227.906,0c-13.674,0-34.186,2.272-34.186-11.36s20.512-34.079,34.186-34.079,22.791,9.088,22.791,22.719-9.116,22.719-22.791,22.719Z" transform="translate(2.535 -2)" fill="none" stroke="#071e46" strokeWidth={5} />
                    </svg>
                  </div>
                  <div className="single-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={260} height={260} viewBox="0 0 369.72 278.487">
                      <path d="M356.094,84.267h-42.64L301.6,54.639A79.363,79.363,0,0,0,227.547,4.5H137.1A79.386,79.386,0,0,0,63.035,54.639L51.184,84.267H8.551A8.543,8.543,0,0,0,.261,94.886l4.273,17.093a8.541,8.541,0,0,0,8.29,6.474H27.118a45.263,45.263,0,0,0-15.726,34.186v34.186a45.21,45.21,0,0,0,11.4,29.863V255.2a22.793,22.793,0,0,0,22.791,22.791H68.369A22.793,22.793,0,0,0,91.16,255.2V232.406H273.485V255.2a22.793,22.793,0,0,0,22.791,22.791h22.791A22.793,22.793,0,0,0,341.857,255.2V216.688a45.182,45.182,0,0,0,11.4-29.863V152.639a45.281,45.281,0,0,0-15.718-34.186h14.294a8.541,8.541,0,0,0,8.29-6.474l4.273-17.093a8.551,8.551,0,0,0-8.3-10.619Zm-250.739-12.7A34.189,34.189,0,0,1,137.1,50.081h90.45A34.189,34.189,0,0,1,259.29,71.568l14.194,35.489H91.16l14.194-35.489ZM68.369,186.682c-13.674,0-22.791-9.088-22.791-22.719s9.116-22.719,22.791-22.719,34.186,20.447,34.186,34.079S82.044,186.682,68.369,186.682Zm227.906,0c-13.674,0-34.186,2.272-34.186-11.36s20.512-34.079,34.186-34.079,22.791,9.088,22.791,22.719-9.116,22.719-22.791,22.719Z" transform="translate(2.535 -2)" fill="none" stroke="#071e46" strokeWidth={5} />
                    </svg>
                  </div>
                  <div className="single-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={260} height={260} viewBox="0 0 369.72 278.487">
                      <path d="M356.094,84.267h-42.64L301.6,54.639A79.363,79.363,0,0,0,227.547,4.5H137.1A79.386,79.386,0,0,0,63.035,54.639L51.184,84.267H8.551A8.543,8.543,0,0,0,.261,94.886l4.273,17.093a8.541,8.541,0,0,0,8.29,6.474H27.118a45.263,45.263,0,0,0-15.726,34.186v34.186a45.21,45.21,0,0,0,11.4,29.863V255.2a22.793,22.793,0,0,0,22.791,22.791H68.369A22.793,22.793,0,0,0,91.16,255.2V232.406H273.485V255.2a22.793,22.793,0,0,0,22.791,22.791h22.791A22.793,22.793,0,0,0,341.857,255.2V216.688a45.182,45.182,0,0,0,11.4-29.863V152.639a45.281,45.281,0,0,0-15.718-34.186h14.294a8.541,8.541,0,0,0,8.29-6.474l4.273-17.093a8.551,8.551,0,0,0-8.3-10.619Zm-250.739-12.7A34.189,34.189,0,0,1,137.1,50.081h90.45A34.189,34.189,0,0,1,259.29,71.568l14.194,35.489H91.16l14.194-35.489ZM68.369,186.682c-13.674,0-22.791-9.088-22.791-22.719s9.116-22.719,22.791-22.719,34.186,20.447,34.186,34.079S82.044,186.682,68.369,186.682Zm227.906,0c-13.674,0-34.186,2.272-34.186-11.36s20.512-34.079,34.186-34.079,22.791,9.088,22.791,22.719-9.116,22.719-22.791,22.719Z" transform="translate(2.535 -2)" fill="none" stroke="#071e46" strokeWidth={5} />
                    </svg>
                  </div>
                  <div className="single-item text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={260} height={260} viewBox="0 0 369.72 278.487">
                      <path d="M356.094,84.267h-42.64L301.6,54.639A79.363,79.363,0,0,0,227.547,4.5H137.1A79.386,79.386,0,0,0,63.035,54.639L51.184,84.267H8.551A8.543,8.543,0,0,0,.261,94.886l4.273,17.093a8.541,8.541,0,0,0,8.29,6.474H27.118a45.263,45.263,0,0,0-15.726,34.186v34.186a45.21,45.21,0,0,0,11.4,29.863V255.2a22.793,22.793,0,0,0,22.791,22.791H68.369A22.793,22.793,0,0,0,91.16,255.2V232.406H273.485V255.2a22.793,22.793,0,0,0,22.791,22.791h22.791A22.793,22.793,0,0,0,341.857,255.2V216.688a45.182,45.182,0,0,0,11.4-29.863V152.639a45.281,45.281,0,0,0-15.718-34.186h14.294a8.541,8.541,0,0,0,8.29-6.474l4.273-17.093a8.551,8.551,0,0,0-8.3-10.619Zm-250.739-12.7A34.189,34.189,0,0,1,137.1,50.081h90.45A34.189,34.189,0,0,1,259.29,71.568l14.194,35.489H91.16l14.194-35.489ZM68.369,186.682c-13.674,0-22.791-9.088-22.791-22.719s9.116-22.719,22.791-22.719,34.186,20.447,34.186,34.079S82.044,186.682,68.369,186.682Zm227.906,0c-13.674,0-34.186,2.272-34.186-11.36s20.512-34.079,34.186-34.079,22.791,9.088,22.791,22.719-9.116,22.719-22.791,22.719Z" transform="translate(2.535 -2)" fill="none" stroke="#071e46" strokeWidth={5} />
                    </svg>
                  </div>
                </OwlCarousel>{/* end gothi-ride-thumbs-slider */}

              </div>{/* end col */}
              <div className="col-lg-6">
                <form action="#" className="gothi-signup-ride-form" autoComplete="off">
                  <div className="signup-form-group">
                    <label htmlFor="userName" className="label">Full Name</label>
                    <input type="text" className="form-control signup-form" placeholder="Enter Your Full Name" id="userName" name="userName" />
                  </div>
                  <div className="signup-form-group">
                    <label htmlFor="userNickname" className="label">Nickname</label>
                    <input type="text" className="form-control signup-form" placeholder="Enter Your Nickname" id="userNickname" name="userNickname" />
                  </div>
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
                  <div className="signup-form-group">
                    <label htmlFor="userPassword1" className="label">Password</label>
                    <input type="password" className="form-control signup-form" placeholder="************" id="userPassword1" name="userPassword1" />
                  </div>
                  <div className="signup-form-group">
                    <label htmlFor="userPassword2" className="label">Re Type Password</label>
                    <input type="password" className="form-control signup-form" placeholder="************" id="userPassword2" name="userPassword2" />
                  </div>
                  <div className="signup-form gothi-form-group gothi-check-form mb-50">
                    <input type="checkbox" id="userTermsCheck" name="userTermsCheck" />
                    <label htmlFor="userTermsCheck">
                      <span>I Agree To Gothi's</span> <a href="#">Terms &amp; Condition</a>
                    </label>
                  </div>
                  <div className="signup-form-group mt-40">
                    <button type="submit" className="btn gothi-submit">Go Ahead</button>
                  </div>
                </form>{/* end form */}
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end gothi-login-wrapper */}
            </div>
        )
    }
}

export default SignUpToRide
