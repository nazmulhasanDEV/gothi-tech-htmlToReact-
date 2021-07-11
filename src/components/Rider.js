import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Rider extends Component {
    render() {
        return (
            <div>
                {/*  Preloader Start */}
          <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
              <div className="preloader-inner position-relative">
                <div className="preloader-circle" />
                <div className="preloader-img pere-text">
                  <img src="assets/img/logo_1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* end Preloader */}
          {/* header */}
          <header className="header header_2 bg_white zindex-99">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom-nav">
                <a className="navbar-brand brand-other" href="index.html">
                  <svg id="Group_49" data-name="Group 49" xmlns="http://www.w3.org/2000/svg" width={138} height="37.968" viewBox="0 0 138 37.968">
                    <g id="G_THI" data-name="G THI" transform="translate(0 4.299)" style={{isolation: 'isolate'}}>
                      <g id="Group_48" data-name="Group 48" style={{isolation: 'isolate'}}>
                        <path id="Path_651" data-name="Path 651" d="M33.145,183.143a2.237,2.237,0,0,1,.666,1.713v7.862a9.265,9.265,0,0,1-.262,2.5,2.784,2.784,0,0,1-.907,1.411,5.436,5.436,0,0,1-1.935.887,23.076,23.076,0,0,1-3.609.766,28.153,28.153,0,0,1-3.85.282,16.464,16.464,0,0,1-7.821-1.754,12.082,12.082,0,0,1-5.08-5.039,17.954,17.954,0,0,1-.02-15.522,12.153,12.153,0,0,1,5.019-5.06,15.726,15.726,0,0,1,7.62-1.774,14.484,14.484,0,0,1,9.273,2.9,3.033,3.033,0,0,1,.847.967,2.694,2.694,0,0,1,.242,1.209,2.821,2.821,0,0,1-.585,1.794,1.725,1.725,0,0,1-1.391.746,2.639,2.639,0,0,1-.947-.161,6.73,6.73,0,0,1-1.028-.524,14.008,14.008,0,0,0-3.1-1.492,10.32,10.32,0,0,0-3.1-.444q-8.225,0-8.224,9.555,0,4.919,2.137,7.338t6.45,2.419a18.157,18.157,0,0,0,4.636-.6v-6.249H24.457a2.662,2.662,0,0,1-1.814-.564,2.338,2.338,0,0,1,0-3.225,2.665,2.665,0,0,1,1.814-.564h6.894A2.515,2.515,0,0,1,33.145,183.143Z" transform="translate(-8.572 -169.415)" fill="#e41f4d" />
                        <path id="Path_652" data-name="Path 652" d="M273,198.463a3.009,3.009,0,0,1-.867-2.258V175.8h-6.531q-2.984,0-2.984-2.58,0-2.54,2.984-2.54h19.351q2.983,0,2.984,2.54,0,2.58-2.984,2.58h-6.531v20.4a3.05,3.05,0,0,1-.847,2.258,3.515,3.515,0,0,1-4.576,0Z" transform="translate(-190.015 -170.322)" fill="#e41f4d" />
                        <path id="Path_653" data-name="Path 653" d="M385.255,170.826a3.051,3.051,0,0,1,.847,2.258V195.7a3.12,3.12,0,0,1-.847,2.278,3.377,3.377,0,0,1-4.5.02,3.147,3.147,0,0,1-.827-2.3V186.67h-13.1V195.7a3.119,3.119,0,0,1-.847,2.278,2.959,2.959,0,0,1-2.217.867,3.05,3.05,0,0,1-2.258-.847,3.1,3.1,0,0,1-.847-2.3V173.083a2.914,2.914,0,0,1,3.1-3.1,2.983,2.983,0,0,1,2.238.847,3.094,3.094,0,0,1,.827,2.258v8.587h13.1v-8.587a3.092,3.092,0,0,1,.827-2.258,2.981,2.981,0,0,1,2.238-.847A3.051,3.051,0,0,1,385.255,170.826Z" transform="translate(-260.035 -169.818)" fill="#e41f4d" />
                        <path id="Path_654" data-name="Path 654" d="M470.269,198a3.1,3.1,0,0,1-.846-2.3V173.083a3.051,3.051,0,0,1,.846-2.258,3.542,3.542,0,0,1,4.6,0,3.051,3.051,0,0,1,.847,2.258V195.7a3.254,3.254,0,0,1-5.443,2.3Z" transform="translate(-337.711 -169.818)" fill="#e41f4d" />
                      </g>
                    </g>
                    <path id="Path_1" data-name="Path 1" d="M138.879,174.829a.462.462,0,0,0-.114-.334l-3.651-4.153a.461.461,0,0,0-.65-.042,18.986,18.986,0,0,0-4.139,5.168.461.461,0,0,0,.183.625l4.852,2.653a.461.461,0,0,0,.625-.183h0a12.555,12.555,0,0,1,2.737-3.417A.459.459,0,0,0,138.879,174.829Z" transform="translate(-95.488 -165.667)" fill="#2e2e2e" />
                    <path id="Path_3" data-name="Path 3" d="M128.926,203.333l-5.336-1.448a.461.461,0,0,0-.566.324,19.032,19.032,0,0,0-.662,4.983c0,.289.007.579.021.885a.46.46,0,0,0,.46.439h.022l5.524-.255a.461.461,0,0,0,.439-.482h0c-.01-.207-.014-.4-.014-.588a12.579,12.579,0,0,1,.436-3.294A.461.461,0,0,0,128.926,203.333Z" transform="translate(-89.841 -188.295)" fill="#2e2e2e" />
                    <path id="Subtraction_2" data-name="Subtraction 2" d="M142.706,247a19.138,19.138,0,0,1-3.826-.386,18.88,18.88,0,0,1-6.789-2.857,18.953,18.953,0,0,1-7.825-11.21l6.352-1.537a12.472,12.472,0,0,0,24.08-.106l6.475,1.53a18.891,18.891,0,0,1-2.725,6.2,19.045,19.045,0,0,1-8.353,6.878,18.9,18.9,0,0,1-3.564,1.106A19.129,19.129,0,0,1,142.706,247Z" transform="translate(-91.201 -209.033)" fill="#e41f4d" />
                    <path id="Path_2" data-name="Path 2" d="M159.486,162.2a.461.461,0,0,0,.622.191h0a12.407,12.407,0,0,1,4.158-1.338.461.461,0,0,0,.395-.518l-.743-5.479a.462.462,0,0,0-.518-.395,18.839,18.839,0,0,0-6.314,2.031.461.461,0,0,0-.191.623Z" transform="translate(-114.466 -154.577)" fill="#2e2e2e" />
                    <path id="Path_4" data-name="Path 4" d="M199.048,156.162a18.837,18.837,0,0,0-6.385-1.786.461.461,0,0,0-.5.414h0l-.533,5.5a.461.461,0,0,0,.414.5h0a12.42,12.42,0,0,1,4.206,1.176.461.461,0,0,0,.614-.215l2.4-4.981A.46.46,0,0,0,199.048,156.162Z" transform="translate(-139.308 -154.374)" fill="#2e2e2e" />
                    <path id="Path_5" data-name="Path 5" d="M224.464,174.034a.461.461,0,0,0-.051-.349,19,19,0,0,0-4.333-5.006.461.461,0,0,0-.648.066h0l-3.488,4.289a.461.461,0,0,0,.067.648A12.572,12.572,0,0,1,218.876,177a.46.46,0,0,0,.631.159h0l4.746-2.837A.462.462,0,0,0,224.464,174.034Z" transform="translate(-156.603 -164.517)" fill="#2e2e2e" />
                    <path id="Path_6" data-name="Path 6" d="M236.747,199.8a.461.461,0,0,0-.577-.3h0l-5.277,1.653a.461.461,0,0,0-.3.577h0a12.528,12.528,0,0,1,.571,3.753c0,.188,0,.381-.014.588a.461.461,0,0,0,.439.482h0l5.524.255h.021a.461.461,0,0,0,.46-.439c.014-.308.021-.6.021-.885A18.973,18.973,0,0,0,236.747,199.8Z" transform="translate(-167.123 -186.589)" fill="#2e2e2e" />
                    <path id="Path_7" data-name="Path 7" d="M181.873,203.43q0-.107,0-.212l4.186-6.559a.425.425,0,0,0-.544-.609l-6.976,3.413a3.87,3.87,0,1,0,3.333,3.969Z" transform="translate(-126.818 -184.108)" fill="#2e2e2e" />
                  </svg>
                </a>{/* end navbar-brand */}
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggle-bar">
                    <span className="line-1" />
                    <span className="line-2" />
                    <span className="line-3" />
                  </span>
                </button>{/* end navbar-toggler */}
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto main-menu borderBottom2">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        EN
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">BN</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="partner.html">PARTNER</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="business.html">BUSINESS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">LOG IN</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link " href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SIGN UP
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                        <li><a className="dropdown-item" href="#">Sign up to ride</a></li>
                      </ul>
                    </li>
                  </ul>{/* end main-menu */}
                  <ul className="navbar-nav main-menu aside-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Area</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Cities</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Help</a>
                    </li>
                  </ul>{/* end aside menu */}
                </div>{/* end navbar collapse */}
              </nav>{/* end navbar */}
            </div>{/* end container */}
          </header> {/* end header */}
          {/* main */}
          <main>
            {/* start banner */}
            <section className="banner banner_3 overlayB50">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-10 mx-auto">
                    <div className="banner-caption">
                      <h1 className="banner-title banner-title2">
                        The whole cities/areas are now within your reach.
                      </h1>
                    </div>
                  </div>
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end banner */}
            <section className="section-padding bg_black">
              <div className="container">
                <div className="row text-center">
                  <h2 className="section-title mb-0 white-color">
                    Walk. Byke. Scoot. Car. Compeer. Ride for Business, Festival &amp; Corporate
                  </h2>
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end section */}
            <section className="section-padding bg_pink">
              <div className="container">
                <div className="row gutter-30">
                  <div className="col-lg-7 col-xl-8 wow fadeInUp">
                    <div className="rider-content">
                      <h3 className="content-title mb-40">
                        Now, let’s get you to that doctor appointment/ Hospital/ School/ Office/ Festival/
                        Airport/ the place with the “good” Travel/ Play practice/ home sweet home.
                      </h3>
                      <div className="ride-btn-wrap">
                        <a href="#" className="btn btn-reverse">SIGN UP TO RIDE</a>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-lg-5 col-xl-4 wow fadeInUp">
                    <div className="rider-content text-lg-end">
                      <h3 className="content-title2">
                        <span className="ex1">That’s</span>
                        <span className="ex2">Gothi’s</span>
                        <span className="ex3">Partner</span>
                      </h3>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
                <div className="row pt-5 wow fadeInUp">
                  <ul className="notice-list">
                    <li className="mb-20">
                      * Gothi ride types may vary by region. Learn more about where bikes
                      available. Check your app to see if Wait &amp; Save, Transit, and
                      Rentals are available in your region.
                    </li>
                    <li>
                      ± Valid only for up to TK 200 off both your ride to and from the
                      Gothi rental location on the reservation pickup and
                      return date. Applies only to base fare and prime time.
                    </li>
                  </ul>
                </div>{/* end  notice list */}
              </div>{/* end container */}
            </section>{/* end section */}
            {/* start estimate section */}
            <section className="section-padding ride-estimate-section">
              <div className="container">
                <div className="row">
                  <h2 className="section-title">
                    Ready to ride? Get a fare estimate
                  </h2>
                </div>{/* end row */}
                <div className="row">
                  <div className="col-12">
                    <form action="#" className="gothi-form_1">
                      <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                          <div className="floating-label-group login-group">
                            <input id="riderPickUpLocation" type="text" className="form-control w-100 radius_10" required />
                            <label htmlFor="riderPickUpLocation" className="floating-label">
                              Enter Pick Up Location
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="floating-label-group login-group">
                            <input id="riderDropOffLocation" type="text" className="form-control w-100 radius_10" required />
                            <label dropzone="riderDropOffLocation" className="floating-label">
                              Enter Drop Off Location
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <button type="submit" className="btn btn-reverse w-100">GET ESTIMATE</button>
                        </div>
                      </div>{/* end innerRow */}
                    </form>{/* end form */}
                  </div>{/* end col */}
                </div>{/* end row */}
                <div className="row pt-5 pb-3 ">
                  <p className="mb-0 lead fs-normal">
                    Sample fares are estimates only and do not reflect variations due to discounts,
                    traffic delays or other factors. Actual fares may vary. You agree to pay
                    the fare shown upon confirming your ride request. If your route or destination changes on
                    trip, your fare may change based on the rates above and other applicable taxes,
                    tolls charges and adjustments. Subject to Gothi’s Terms of Service.
                  </p>
                </div>
              </div>{/* end container */}
            </section>{/*  end ride-estimate-section*/}
            {/* start overview wrapper */}
            <div className="overview-wrapper">
            </div>{/* end overview wrapper */}
            {/* start overview wrap */}
            <div className="overview-wrap">
              <div className="container">
                <OwlCarousel 
                className="owl-carousel owl-theme"
                items={3}
                loop={true}
                nav={true} 
                loop={true}
                autoplay={true}
                autoplayTimeout={3000}
                smartSpeed= {1000}
                >

                  <div className="item">
                    <img className="img-fluid" src="assets/img/overview_img1.png" alt="" />
                    <div className="steping text-center">
                      <h3 className="step-count">Step 1</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img className="img-fluid" src="assets/img/overview_img1.png" alt="" />
                    <div className="steping text-center">
                      <h3 className="step-count">Step 2</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img className="img-fluid" src="assets/img/overview_img1.png" alt="" />
                    <div className="steping text-center">
                      <h3 className="step-count">Step 3</h3>
                    </div>
                  </div>

                </OwlCarousel>
                {/* end overview slider */}
              </div>{/* end container */}
            </div>{/* end overview  */}
            {/* start stepping wrapper */}
            <div className="stepping-wrapper bg_pink section-padding">
              <div className="container">
                <div className="row gutter-30 align-items-center justify-content-center">
                  <div className="col-md-6 col-lg-5">
                    <h2 className="section-title mb-0">
                      Where you go? From the home screen.
                    </h2>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-5">
                    <div className="step-wrap">
                      <h4 className="step mb-10">CHOOSE YOUR STYLE.</h4>
                      <p className="mb-0">
                        8 different way’s* to get there- whether you’re
                        in the mode to bike, car or compeer. Ready to ride.
                      </p>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end stepping wrapper */}
            {/* start feature */}
            <section className="feature-section bg_1 section-padding">
              <div className="container">
                <div className="row gutter-30">
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="feature minHeight525">
                      <div className="feature-icon2 bg_black rounded p-2 mb-20 d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 135 135">
                          <path id="Icon_material-time-to-leave" data-name="Icon material-time-to-leave" d="M123.9,14.522C122.4,9.544,118.2,6,113.25,6H30.75C25.8,6,21.675,9.544,20.1,14.522L4.5,65.062v67.5C4.5,137.2,7.875,141,12,141h7.5c4.125,0,7.5-3.8,7.5-8.437v-8.438h90v8.438c0,4.641,3.375,8.438,7.5,8.438H132c4.125,0,7.5-3.8,7.5-8.437v-67.5ZM30.75,98.812c-6.225,0-11.25-5.653-11.25-12.656S24.525,73.5,30.75,73.5,42,79.153,42,86.156,36.975,98.812,30.75,98.812Zm82.5,0c-6.225,0-11.25-5.653-11.25-12.656S107.025,73.5,113.25,73.5s11.25,5.653,11.25,12.656S119.475,98.812,113.25,98.812ZM19.5,56.625,30.75,18.656h82.5L124.5,56.625Z" transform="translate(-4.5 -6)" fill="#fff8f9" />
                        </svg>
                      </div>
                      <h3 className="feature-title">
                        <a href="#">
                          If it gets you there, it’s in the app</a>
                      </h3>
                      <p>
                        Shared rides, bikes, scooters, cars, public transit. There’s lots to do in your city,
                        and we’ve got the rides to help you enjoy it all. Our 8 different options suit your
                        needs and mood. And they’re all available right from your app.
                      </p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="feature minHeight525">
                      <div className="feature-icon2 bg_black rounded p-2 mb-20 d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 135 135">
                          <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M70.875,3.375a67.5,67.5,0,1,0,67.5,67.5A67.49,67.49,0,0,0,70.875,3.375Zm4.543,73.341a4.557,4.557,0,0,1-4.543,4.543H39.721a4.543,4.543,0,0,1,0-9.087H66.332V29.336a4.543,4.543,0,0,1,9.087,0Z" transform="translate(-3.375 -3.375)" fill="#fff8f9" />
                        </svg>
                      </div>
                      <h3 className="feature-title">
                        <a href="#">
                          Save time for your Journey
                        </a>
                      </h3>
                      <p>
                        The band goes on at 8 sharp. You can’t be late for work. (Again.) Your time is your
                        money. And tackling traffic or hunting for parking is a total pain. So, in seconds,
                        we’ll match you with a driver, help you find the quickest bus route, or show you the
                        nearest scooter.
                      </p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="feature minHeight525">
                      <div className="feature-icon2 bg_black rounded p-2 mb-20 d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 135 162">
                          <path id="Icon_awesome-hand-paper" data-name="Icon awesome-hand-paper" d="M123.182,40.5c-6.758-.136-12.289,5.807-12.289,12.9V81h-2.411V25.246c0-7.1-5.531-13.04-12.289-12.9C89.645,12.474,84.375,18.089,84.375,25V81H81.964V12.906c0-7.1-5.531-13.04-12.289-12.9C63.127.134,57.857,5.749,57.857,12.656V81H55.447V25.563c0-7.1-5.531-13.04-12.289-12.9-6.548.132-11.818,5.747-11.818,12.654V99.982L21.8,86.212A11.686,11.686,0,0,0,4.965,83.421,13.072,13.072,0,0,0,2.306,101.1l37.849,54.645A14.257,14.257,0,0,0,51.852,162h59.542a14.629,14.629,0,0,0,14.08-11.709l7.988-35.646A63.655,63.655,0,0,0,135,100.731V53.156C135,46.249,129.73,40.634,123.182,40.5Z" fill="#fff8f9" />
                        </svg>
                      </div>
                      <h3 className="feature-title">
                        <a href="#">
                          We’re committed to safety
                        </a>
                      </h3>
                      <p>
                        Your peace of mind is our peace of mind. In addition to screening every driver and
                        holding our community accountable, we’ve built safety right into the app. You’ll see
                        driver and car details so you can confirm every ride, you can share your route with
                        friends, and more.
                      </p>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section> {/* end feature */}
            <section className="service-list-section bg_gray section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="service-list-wrap gutter-20">
                      <div className="row gutter-20 borderBottom1 py-2 align-items-center wow fadeInUp">
                        <div className="col-md-3">
                          <div className="service-list-thumbs">
                            <img src="assets/img/service-list_1.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="service-list-block">
                            <h3 className="list-title">Bikes &amp; Scooters</h3>
                            <p>
                              Unlock a bike or scooter and pay right through your app.
                              We’ll show how to ride, where to park, and how to stay
                              safe while you’re breezing past traffic. You’ll even
                              see bike lanes in your app so you can find the best route.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row gutter-20 borderBottom1 py-2 align-items-center wow fadeInUp">
                        <div className="col-md-3">
                          <div className="service-list-thumbs">
                            <img src="assets/img/service-list_2.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="service-list-block">
                            <h3 className="list-title">Compeer</h3>
                            <p>
                              Pay a little less to share your car with other riders heading in the
                              same direction. You can request a Shared ride for yourself and
                              a friend, and you may stop to pick up and drop off other riders.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row  gutter-20 borderBottom1 py-2 align-items-center wow fadeInUp">
                        <div className="col-md-3">
                          <div className="service-list-thumbs">
                            <img src="assets/img/service-list_3.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="service-list-block">
                            <h3 className="list-title">Wait &amp; Save</h3>
                            <p>
                              Lock in a lower price when it’s busy. Wait &amp; Save is our most affordable
                              personal ride. Once you book, give us some time to pair you with the
                              best driver for your route and pickup spot.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row gutter-20  py-2 align-items-center wow fadeInUp">
                        <div className="col-md-3">
                          <div className="service-list-thumbs">
                            <img src="assets/img/service-list_4.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="service-list-block">
                            <h3 className="list-title">Rentals for Business</h3>
                            <p>
                              Reserve a rental car for road trips, moving day, and that much-needed
                              weekend escape. You won’t pay extra for gas, and we’ll cover your
                              rides± to and from the rental lot. Plus, you’ll
                              get unlimited miles to go as far as you want.
                            </p>
                          </div>
                        </div>
                      </div>{/* end innter row (single service list) */}
                    </div>{/* end service list-wrap */}
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end service list section */}
          </main>
          {/* footer */}
          <footer className="footer" style={{backgroundImage: 'url(./assets/img/footer_bg.png)'}}>
            <div className="footer-top">
              <div className="container">
                <div className="row gutter-40">
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="footer-widget">
                      <h3 className="widget-title">
                        PARTNER
                      </h3>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">Become a partner</a>
                        </li>
                        <li>
                          <a href="#">Cities</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                        <li>
                          <a href="#">Safety</a>
                        </li>
                        <li>
                          <a href="#"> Express Drive </a>
                        </li>
                        <li>
                          <a href="#">Application Requirements</a>
                        </li>
                        <li>
                          <a href="#">Insurance</a>
                        </li>
                        <li>
                          <a href="#">Earnings</a>
                        </li>
                        <li>
                          <a href="#">Bonus</a>
                        </li>
                        <li>
                          <a href="#">Gothi Rewards </a>
                        </li>
                        <li>
                          <a href="#">Jobs</a>
                        </li>
                        <li>
                          <a href="#">Area </a>
                        </li>
                      </ul>
                    </div>
                  </div>{/* end col */}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="footer-widget">
                      <h3 className="widget-title">
                        RIDER
                      </h3>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">Sign up to ride </a>
                        </li>
                        <li>
                          <a href="#">Business Profile </a>
                        </li>
                        <li>
                          <a href="#">Cities </a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                        <li>
                          <a href="#">Safety</a>
                        </li>
                        <li>
                          <a href="#"> Rewards </a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Fare Estimate</a>
                        </li>
                        <li>
                          <a href="#">Airports</a>
                        </li>
                        <li>
                          <a href="#"> Gift Cards </a>
                        </li>
                        <li>
                          <a href="#">Donate</a>
                        </li>
                        <li>
                          <a href="#">Blog </a>
                        </li>
                      </ul>
                    </div>
                  </div>{/* end col */}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="footer-widget">
                      <h3 className="widget-title">
                        GOTHI
                      </h3>
                      <ul className="footer-menu">
                        <li>
                          <a href="about.html">About Gothi </a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="business.html">Business</a>
                        </li>
                        <li>
                          <a href="#">Self-Driving </a>
                        </li>
                        <li>
                          <a href="#"> Developers </a>
                        </li>
                        <li>
                          <a href="#">Bikes</a>
                        </li>
                        <li>
                          <a href="#">Scooters</a>
                        </li>
                        <li>
                          <a href="#">Air Ticket </a>
                        </li>
                        <li>
                          <a href="#">Rentals</a>
                        </li>
                        <li>
                          <a href="#">Sister Concern</a>
                        </li>
                        <li>
                          <a href="#">Press</a>
                        </li>
                        <li>
                          <a href="#">Investor Relations </a>
                        </li>
                      </ul>
                    </div>
                  </div>{/* end col */}
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="footer-widget">
                      <ul className="footer-btn">
                        <li><a href="#" className="btn btn-secondary">Gothi partner app</a></li>
                        <li><a href="#" className="btn btn-secondary">Gothi rider app</a></li>
                        <li><a href="#" className="btn btn-secondary">Ride on web</a></li>
                      </ul>
                      <ul className="app-list ms-4 mb-30">
                        <li><a href="#"><img src="assets/img/playstore.png" height={60} alt="" className="mb-15" /></a></li>
                        <li><a href="#"><img src="assets/img/appstore.png" height={60} alt="" /></a></li>
                      </ul>
                      <ul className="footer-social ms-4 my-2">
                        <li>
                          <a href="#"><i className="fab fa-facebook" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-youtube" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end footer top */}
            <div className="footer-bottom">
              <div className="container">
                <div className="row gutter-30">
                  <div className="col-md-4">
                    <ul className="ft-bottom-list">
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>{/* end col */}
                  <div className="col-md-8 text-md-end">
                    <p className="coyptext">
                      © <a href="#">Gothi Technologies Ltd</a>, Incorporation No: C-150654/2019
                    </p>
                  </div>
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end footer bottom */}
          </footer>
          {/* end footer */}
          {/* backtotop */}
          <a href="#" id="back-to-top"><i className="fas fa-chevron-up" /></a>
            </div>
        )
    }
}

export default Rider
