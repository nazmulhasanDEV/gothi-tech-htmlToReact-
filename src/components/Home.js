import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export class Home extends Component {
// owl-carousel state to make items responsive
    state= {
        responsive:{
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 6,
            },
        },
    }

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
          <header className="header">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom-nav">
                <a className="navbar-brand brand-home" href="index.html">
                  <svg id="Group_49" data-name="Group 49" xmlns="http://www.w3.org/2000/svg" width={138} height="37.968" viewBox="0 0 138 37.968">
                    <g id="G_THI" data-name="G THI" transform="translate(0 4.299)" style={{isolation: 'isolate'}}>
                      <g id="Group_48" data-name="Group 48" style={{isolation: 'isolate'}}>
                        <path id="Path_651" data-name="Path 651" d="M33.145,183.143a2.237,2.237,0,0,1,.666,1.713v7.862a9.265,9.265,0,0,1-.262,2.5,2.784,2.784,0,0,1-.907,1.411,5.436,5.436,0,0,1-1.935.887,23.076,23.076,0,0,1-3.609.766,28.153,28.153,0,0,1-3.85.282,16.464,16.464,0,0,1-7.821-1.754,12.082,12.082,0,0,1-5.08-5.039,17.954,17.954,0,0,1-.02-15.522,12.153,12.153,0,0,1,5.019-5.06,15.726,15.726,0,0,1,7.62-1.774,14.484,14.484,0,0,1,9.273,2.9,3.033,3.033,0,0,1,.847.967,2.694,2.694,0,0,1,.242,1.209,2.821,2.821,0,0,1-.585,1.794,1.725,1.725,0,0,1-1.391.746,2.639,2.639,0,0,1-.947-.161,6.73,6.73,0,0,1-1.028-.524,14.008,14.008,0,0,0-3.1-1.492,10.32,10.32,0,0,0-3.1-.444q-8.225,0-8.224,9.555,0,4.919,2.137,7.338t6.45,2.419a18.157,18.157,0,0,0,4.636-.6v-6.249H24.457a2.662,2.662,0,0,1-1.814-.564,2.338,2.338,0,0,1,0-3.225,2.665,2.665,0,0,1,1.814-.564h6.894A2.515,2.515,0,0,1,33.145,183.143Z" transform="translate(-8.572 -169.415)" fill="#2e2e2e" />
                        <path id="Path_652" data-name="Path 652" d="M273,198.463a3.009,3.009,0,0,1-.867-2.258V175.8h-6.531q-2.984,0-2.984-2.58,0-2.54,2.984-2.54h19.351q2.983,0,2.984,2.54,0,2.58-2.984,2.58h-6.531v20.4a3.05,3.05,0,0,1-.847,2.258,3.515,3.515,0,0,1-4.576,0Z" transform="translate(-190.015 -170.322)" fill="#2e2e2e" />
                        <path id="Path_653" data-name="Path 653" d="M385.255,170.826a3.051,3.051,0,0,1,.847,2.258V195.7a3.12,3.12,0,0,1-.847,2.278,3.377,3.377,0,0,1-4.5.02,3.147,3.147,0,0,1-.827-2.3V186.67h-13.1V195.7a3.119,3.119,0,0,1-.847,2.278,2.959,2.959,0,0,1-2.217.867,3.05,3.05,0,0,1-2.258-.847,3.1,3.1,0,0,1-.847-2.3V173.083a2.914,2.914,0,0,1,3.1-3.1,2.983,2.983,0,0,1,2.238.847,3.094,3.094,0,0,1,.827,2.258v8.587h13.1v-8.587a3.092,3.092,0,0,1,.827-2.258,2.981,2.981,0,0,1,2.238-.847A3.051,3.051,0,0,1,385.255,170.826Z" transform="translate(-260.035 -169.818)" fill="#2e2e2e" />
                        <path id="Path_654" data-name="Path 654" d="M470.269,198a3.1,3.1,0,0,1-.846-2.3V173.083a3.051,3.051,0,0,1,.846-2.258,3.542,3.542,0,0,1,4.6,0,3.051,3.051,0,0,1,.847,2.258V195.7a3.254,3.254,0,0,1-5.443,2.3Z" transform="translate(-337.711 -169.818)" fill="#2e2e2e" />
                      </g>
                    </g>
                    <path id="Path_1" data-name="Path 1" d="M138.879,174.829a.462.462,0,0,0-.114-.334l-3.651-4.153a.461.461,0,0,0-.65-.042,18.986,18.986,0,0,0-4.139,5.168.461.461,0,0,0,.183.625l4.852,2.653a.461.461,0,0,0,.625-.183h0a12.555,12.555,0,0,1,2.737-3.417A.459.459,0,0,0,138.879,174.829Z" transform="translate(-95.488 -165.667)" fill="#e41f4d" />
                    <path id="Path_3" data-name="Path 3" d="M128.926,203.333l-5.336-1.448a.461.461,0,0,0-.566.324,19.032,19.032,0,0,0-.662,4.983c0,.289.007.579.021.885a.46.46,0,0,0,.46.439h.022l5.524-.255a.461.461,0,0,0,.439-.482h0c-.01-.207-.014-.4-.014-.588a12.579,12.579,0,0,1,.436-3.294A.461.461,0,0,0,128.926,203.333Z" transform="translate(-89.841 -188.295)" fill="#e41f4d" />
                    <path id="Subtraction_2" data-name="Subtraction 2" d="M142.706,247a19.138,19.138,0,0,1-3.826-.386,18.88,18.88,0,0,1-6.789-2.857,18.953,18.953,0,0,1-7.825-11.21l6.352-1.537a12.472,12.472,0,0,0,24.08-.106l6.475,1.53a18.891,18.891,0,0,1-2.725,6.2,19.045,19.045,0,0,1-8.353,6.878,18.9,18.9,0,0,1-3.564,1.106A19.129,19.129,0,0,1,142.706,247Z" transform="translate(-91.201 -209.033)" fill="#2e2e2e" />
                    <path id="Path_2" data-name="Path 2" d="M159.486,162.2a.461.461,0,0,0,.622.191h0a12.407,12.407,0,0,1,4.158-1.338.461.461,0,0,0,.395-.518l-.743-5.479a.462.462,0,0,0-.518-.395,18.839,18.839,0,0,0-6.314,2.031.461.461,0,0,0-.191.623Z" transform="translate(-114.466 -154.577)" fill="#e41f4d" />
                    <path id="Path_4" data-name="Path 4" d="M199.048,156.162a18.837,18.837,0,0,0-6.385-1.786.461.461,0,0,0-.5.414h0l-.533,5.5a.461.461,0,0,0,.414.5h0a12.42,12.42,0,0,1,4.206,1.176.461.461,0,0,0,.614-.215l2.4-4.981A.46.46,0,0,0,199.048,156.162Z" transform="translate(-139.308 -154.374)" fill="#e41f4d" />
                    <path id="Path_5" data-name="Path 5" d="M224.464,174.034a.461.461,0,0,0-.051-.349,19,19,0,0,0-4.333-5.006.461.461,0,0,0-.648.066h0l-3.488,4.289a.461.461,0,0,0,.067.648A12.572,12.572,0,0,1,218.876,177a.46.46,0,0,0,.631.159h0l4.746-2.837A.462.462,0,0,0,224.464,174.034Z" transform="translate(-156.603 -164.517)" fill="#e41f4d" />
                    <path id="Path_6" data-name="Path 6" d="M236.747,199.8a.461.461,0,0,0-.577-.3h0l-5.277,1.653a.461.461,0,0,0-.3.577h0a12.528,12.528,0,0,1,.571,3.753c0,.188,0,.381-.014.588a.461.461,0,0,0,.439.482h0l5.524.255h.021a.461.461,0,0,0,.46-.439c.014-.308.021-.6.021-.885A18.973,18.973,0,0,0,236.747,199.8Z" transform="translate(-167.123 -186.589)" fill="#e41f4d" />
                    <path id="Path_7" data-name="Path 7" d="M181.873,203.43q0-.107,0-.212l4.186-6.559a.425.425,0,0,0-.544-.609l-6.976,3.413a3.87,3.87,0,1,0,3.333,3.969Z" transform="translate(-126.818 -184.108)" fill="#e41f4d" />
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
                  <ul className="navbar-nav ms-auto main-menu">
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
                      <a className="nav-link" href="rider.html">RIDER</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="business.html">BUSINESS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">COVID-19</a>
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
                        <li><a className="dropdown-item" href="#">Apply to drive</a></li>
                      </ul>
                    </li>
                  </ul>{/* end main-menu */}
                </div>{/* end navbar collapse */}
              </nav>{/* end navbar */}
            </div>{/* end container */}
          </header> {/* end header */}
         
          {/* main */}
          <main>
            {/* start banner */}
            <section className="banner banner-home" style={{backgroundImage: 'url("./assets/img/banner_bg.png")'}}>
              <div className="container">
                <div className="row gutter-30 ">
                  <div className="col-lg-6  col-xxl-5 align-self-center">
                    <div className="banner-caption">
                      <span className="banner-subtitle">Let's speed up.</span>
                      <h1 className="banner-title">
                        Stay up to ‘GOTHI’ to make life more speedy.
                      </h1>
                      <div className="btn-wrap banner-btn">
                        <a href="#" className="btn me-2">Sign up to ride</a>
                        <a href="#" className="btn">Apply to drive</a>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-lg-6 col-xxl-7">
                    <div className="banner-home-img">
                      <img src="assets/img/banner_home.png" className="img-fluid" alt="" />
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end banner */}
            {/* start category */}
            <div className="category-area ">
              <div className="container">
                <div className="row">
                  <h2 className="section-title text-center">
                    Join Now! Add Earn With
                  </h2>
                </div>{/* end row */}
                {/* category ride slider */}

                <OwlCarousel 
                className="gothi-owl-carousel owl-carousel owl-theme" 
                items={6}
                loop={true}
                dots={false}
                nav={true} 
                autoplay={true}
                autoplayTimeout={3000}
                animateOut={true}
                responsive={this.state.responsive}
                smartSpeed= {1000}
                >
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat1.png').default} alt="ride cat" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat2.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat3.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat4.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat5.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat6.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat7.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat8.png').default} alt="" />
                    </a>
                  </div>
                  <div className="single-category">
                    <a href="#">
                      <img src={require('../images/ride_cat9.png').default} alt="ride" />
                    </a>
                  </div>
               
                </OwlCarousel>{/* end category slider */}

              </div>{/* end container */}
            </div>{/* end category */}

            {/* start ride area */}
            <div className="ride-area section-padding">
              <div className="container">
                <div className="row gutter-40">
                  <div className="col-lg-6 align-self-center">
                    <div className="premium-ride-box">
                      {/* premium ride slider */}

                      <OwlCarousel 
                      className="gothi-owl-carousel owl-carousel owl-theme"
                      items={1}
                      loop={true}
                      dots={false}
                      nav={false} 
                      autoplay={true}
                      smartSpeed= {1000}
                      >
                        <div className="ride-thumb">
                          <a href="#">
                            <span className="ride-meta">Premium Ride</span>
                            <img src={require("../images/ride_thumbs_big1.png").default} className="img-fluid" alt="" />
                          </a>
                        </div>
                        <div className="ride-thumb">
                          <a href="#">
                            <span className="ride-meta">Premium Ride</span>
                            <img src={require("../images/ride_thumbs_big2.png").default} className="img-fluid" alt="" />
                          </a>
                        </div>
                        <div className="ride-thumb">
                          <a href="#">
                            <span className="ride-meta">Premium Ride</span>
                            <img src={require("../images/ride_thumbs_big1.png").default} className="img-fluid" alt="" />
                          </a>
                        </div>
                        <div className="ride-thumb">
                          <a href="#">
                            <span className="ride-meta">Premium Ride</span>
                            <img src={require("../images/ride_thumbs_big2.png").default} className="img-fluid" alt="" />
                          </a>
                        </div>

                      </OwlCarousel>

                    </div>
                  </div>{/* end col */}
                  <div className="col-lg-6">
                    <div className="ride-block">
                      <div className="row">
                        <div className="col-lg-8">
                          <form action="#" className="select-area-form mb-30">
                            <h4 className="form-title">Good Morning</h4>
                            <div className="floating-label-group  input-group">
                              <input type="tel" className="form-control me-3" required />
                              <label className="floating-label">Where to?</label>
                              <button type="submit" className="btn btn-now">
                                <i className="fas fa-clock" />
                                Now
                                <i className="fas fa-angle-down" />
                              </button>
                            </div>
                          </form>{/* end area select form */}
                        </div>{/* end col */}
                      </div>{/* end row */}
                      <div className="ride-option text-center">
                        <h4 className="form-title text-start">Select Your Need</h4>
                        <div className="row gutter-20">
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type">
                              <div className="ride-type-thumbs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76.201" height="44.45" viewBox="0 0 76.201 44.45">
                                  <g id="Component_14_2" data-name="Component 14 – 2" transform="translate(0)">
                                    <path id="Path_3551" data-name="Path 3551" d="M64.772,128.257a11.348,11.348,0,0,0-3.542.569l-1.205-2.653a13.9,13.9,0,0,1,3.477-.456h5.08a1.27,1.27,0,0,0,1.27-1.27c0-9.472-7.715-17.78-16.51-17.78a1.269,1.269,0,0,0-1.189,1.716l.6,1.589-2.91-.726a1.27,1.27,0,0,0-.615,2.465l4.608,1.152,1.115,2.974C49.9,114.01,42.428,112.39,37.2,114.575a9.313,9.313,0,0,0-4.987,4.707l-10.622-1.064v-1.391a1.269,1.269,0,0,0-1.021-1.245l-12.7-2.54a1.271,1.271,0,0,0-1.386,1.813l1.886,3.769L2.139,120.7a1.272,1.272,0,0,0-.856,1.025l-1.27,8.89a1.27,1.27,0,0,0,2.289.921,14.53,14.53,0,0,1,11.669-5.82,13.986,13.986,0,0,1,13.448,10.234l-2.5.455a11.419,11.419,0,1,0,.485,3.282c0-.263-.022-.521-.039-.78l2.517-.457c.036.408.062.819.062,1.237a1.27,1.27,0,0,0,1.27,1.27h19.05a1.27,1.27,0,0,0,1.27-1.27,13.977,13.977,0,0,1,8.092-12.656l1.3,2.855a11.405,11.405,0,1,0,5.85-1.629Zm-50.8,20.32a8.89,8.89,0,1,1,8.423-11.712l-8.65,1.572a1.27,1.27,0,0,0,.455,2.5l8.646-1.572c0,.108.017.213.017.322A8.9,8.9,0,0,1,13.971,148.577Zm33.069-10.16H30.433a16.533,16.533,0,0,0-16.462-15.24,17.387,17.387,0,0,0-10.88,3.866l.6-4.18,6.876-2.292A1.271,1.271,0,0,0,11.3,118.8l-1.379-2.757,9.133,1.827v1.5a1.27,1.27,0,0,0,1.143,1.264l12.7,1.27a1.269,1.269,0,0,0,1.32-.827,6.83,6.83,0,0,1,3.968-4.156c5.484-2.3,14.464.523,18.443,2.336a1.27,1.27,0,0,0,1.716-1.6l-3.109-8.291a14.264,14.264,0,0,1,9.28,6.2H63.5a1.27,1.27,0,0,0,0,2.54h2.437a15.677,15.677,0,0,1,1.32,5.08H63.5A16.533,16.533,0,0,0,47.04,138.417Zm17.732,10.16a8.882,8.882,0,0,1-4.793-16.365l3.637,8a1.27,1.27,0,0,0,2.311-1.052l-3.639-8a8.888,8.888,0,1,1,2.483,17.421Z" transform="translate(-0.001 -106.667)" fill="#f8f8f8" />
                                  </g>
                                </svg>
                              </div>
                              <h4 className="ride-title">
                                Moto
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-cat2">
                              <div className="ride-type-thumbs">
                                <svg id="car_2_" data-name="car (2)" xmlns="http://www.w3.org/2000/svg" width="57.466" height="44.45" viewBox="0 0 57.466 44.45">
                                  <g id="Group_35" data-name="Group 35" transform="translate(0 0)">
                                    <g id="Group_34" data-name="Group 34">
                                      <path id="Path_3546" data-name="Path 3546" d="M55.268,69.515l-1.252-1.326L49.62,56.34a5.156,5.156,0,0,0-4.8-3.34h-31.4a5.138,5.138,0,0,0-4.8,3.34l-4.335,11.7L2.48,69.712A7.055,7.055,0,0,0,0,75.078V92.342A5.133,5.133,0,0,0,5.133,97.45H8.374a5.133,5.133,0,0,0,5.133-5.108v-2.5H43.959v2.5a5.133,5.133,0,0,0,5.133,5.108h3.242a5.133,5.133,0,0,0,5.133-5.108V74.624A7.12,7.12,0,0,0,55.268,69.515Zm-44.34-12.34a2.656,2.656,0,0,1,2.493-1.719h31.41a2.673,2.673,0,0,1,2.493,1.719l3.831,10.314H48.294a8.422,8.422,0,0,0-16.663,0H7.1Zm34.86,10.314H34.111a5.965,5.965,0,0,1,11.677,0ZM11.051,92.342a2.67,2.67,0,0,1-2.677,2.652H5.133a2.67,2.67,0,0,1-2.677-2.652V89.125a4.987,4.987,0,0,0,2.677.712h5.919Zm43.959,0a2.67,2.67,0,0,1-2.677,2.652H49.092a2.678,2.678,0,0,1-2.677-2.652v-2.5h5.919a4.987,4.987,0,0,0,2.677-.712v3.217Zm-2.677-4.961H5.133a2.649,2.649,0,0,1-2.677-2.628V75.078a4.61,4.61,0,0,1,1.633-3.512l.049-.049,1.67-1.572h46.5l1.179,1.265c.012.025.049.037.061.061A4.628,4.628,0,0,1,55,74.624v10.13h.012A2.657,2.657,0,0,1,52.334,87.382Z" transform="translate(0 -53)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                  <g id="Group_37" data-name="Group 37" transform="translate(5.771 21.857)">
                                    <g id="Group_36" data-name="Group 36">
                                      <path id="Path_3547" data-name="Path 3547" d="M57.437,231H48.228A1.232,1.232,0,0,0,47,232.228v6.385a1.232,1.232,0,0,0,1.228,1.228h9.209a1.232,1.232,0,0,0,1.228-1.228v-6.385A1.232,1.232,0,0,0,57.437,231Zm-1.228,6.385H49.456v-3.929h6.754Z" transform="translate(-47 -231)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                  <g id="Group_39" data-name="Group 39" transform="translate(40.03 21.857)">
                                    <g id="Group_38" data-name="Group 38">
                                      <path id="Path_3548" data-name="Path 3548" d="M336.437,231h-9.209A1.232,1.232,0,0,0,326,232.228v6.385a1.232,1.232,0,0,0,1.228,1.228h9.209a1.232,1.232,0,0,0,1.228-1.228v-6.385A1.232,1.232,0,0,0,336.437,231Zm-1.228,6.385h-6.753v-3.929h6.753Z" transform="translate(-326 -231)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                  <g id="Group_41" data-name="Group 41" transform="translate(21.574 27.014)">
                                    <g id="Group_40" data-name="Group 40" transform="translate(0 0)">
                                      <path id="Path_3549" data-name="Path 3549" d="M188.79,273H176.928a1.228,1.228,0,1,0,0,2.456H188.79a1.228,1.228,0,0,0,0-2.456Z" transform="translate(-175.7 -273)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                  <g id="Group_43" data-name="Group 43" transform="translate(21.574 23.208)">
                                    <g id="Group_42" data-name="Group 42" transform="translate(0 0)">
                                      <path id="Path_3550" data-name="Path 3550" d="M188.79,242H176.928a1.228,1.228,0,1,0,0,2.456H188.79a1.228,1.228,0,1,0,0-2.456Z" transform="translate(-175.7 -242)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <h4 className="ride-title">
                                Car
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-cat3">
                              <div className="ride-type-thumbs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65.081" height="41.226" viewBox="0 0 65.081 41.226">
                                  <g id="Component_15_2" data-name="Component 15 – 2" transform="translate(0 0)">
                                    <path id="Subtraction_3" data-name="Subtraction 3" d="M50.98,41.226a7.582,7.582,0,0,1-7.506-6.5H21.607a7.583,7.583,0,0,1-15.012,0H5.424A5.439,5.439,0,0,1,0,29.3V22.081A18.194,18.194,0,0,1,1.545,14.69L5.977,4.56A7.6,7.6,0,0,1,12.934.011h1.9l2.917,0,21.293,0V0h2.17V.011h4.918a7.6,7.6,0,0,1,5.349,2.223L62.856,13.609a7.585,7.585,0,0,1,2.224,5.368v12.49a3.258,3.258,0,0,1-3.254,3.254H58.486a7.582,7.582,0,0,1-7.506,6.5Zm0-13.012A5.423,5.423,0,1,0,56.4,33.636,5.429,5.429,0,0,0,50.98,28.213Zm-36.879,0a5.423,5.423,0,1,0,5.424,5.423A5.429,5.429,0,0,0,14.1,28.213ZM50.98,26.047a7.582,7.582,0,0,1,7.506,6.5h3.341a1.086,1.086,0,0,0,1.085-1.085V30.382H59.658V28.213h3.254v-2.17H59.658a3.254,3.254,0,1,1,0-6.508h3.254v-.558a5.376,5.376,0,0,0-.269-1.611H41.218V32.551h2.256a7.582,7.582,0,0,1,7.506-6.5Zm-36.879,0a7.582,7.582,0,0,1,7.506,6.5H39.048V17.366H12.409A3.254,3.254,0,0,1,9.22,13.477l1.3-6.509A3.276,3.276,0,0,1,13.71,4.35H50.531l-.581-.581A5.433,5.433,0,0,0,46.126,2.18H12.934A5.424,5.424,0,0,0,7.965,5.435L3.533,15.559a16.085,16.085,0,0,0-1.364,6.522v6.132H5.424v2.169H2.369a3.261,3.261,0,0,0,3.055,2.169H6.595a7.582,7.582,0,0,1,7.506-6.5Zm45.557-4.342a1.085,1.085,0,1,0,0,2.169h3.254V21.705ZM41.218,6.519V15.2H61.367l-.011-.013-.006-.008,0-.006a.24.24,0,0,0-.023-.029L52.7,6.519Zm-27.508,0a1.1,1.1,0,0,0-1.057.874l-1.3,6.508a1.051,1.051,0,0,0,.217.9,1.079,1.079,0,0,0,.84.4H39.048V6.519Z" transform="translate(0 0)" fill="#f8f8f8" />
                                  </g>
                                </svg>
                              </div>
                              <h4 className="ride-title">
                                Micro
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-cat4">
                              <div className="ride-type-thumbs">
                                <svg id="tuk-tuk_1_" data-name="tuk-tuk (1)" xmlns="http://www.w3.org/2000/svg" width="60.628" height="40.419" viewBox="0 0 60.628 40.419">
                                  <g id="Group_31" data-name="Group 31" transform="translate(0 27.283)">
                                    <g id="Group_30" data-name="Group 30" transform="translate(0 0)">
                                      <path id="Path_3541" data-name="Path 3541" d="M6.568,315.733a6.568,6.568,0,1,0,6.568,6.568A6.576,6.576,0,0,0,6.568,315.733Zm0,11.115a4.547,4.547,0,1,1,4.547-4.547A4.553,4.553,0,0,1,6.568,326.848Z" transform="translate(0 -315.733)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                  <g id="Group_33" data-name="Group 33">
                                    <g id="Group_32" data-name="Group 32">
                                      <path id="Path_3542" data-name="Path 3542" d="M59.618,105.542h-1.01V94.426a9.11,9.11,0,0,0-7.6-8.972,1.011,1.011,0,0,0-.483-.122H18.189a.866.866,0,0,0-.1.005C11.64,85.99,7.66,97.059,6.318,101.5H5.053a1.011,1.011,0,0,0-1.01,1.01v4.042a1.011,1.011,0,0,0,1.01,1.01H8.084v1.061a10.106,10.106,0,0,0-7.747,2.523,1.01,1.01,0,1,0,1.348,1.506,8.084,8.084,0,0,1,13.473,6.026,1.011,1.011,0,0,0,1.01,1.01H42.521a7.064,7.064,0,0,0,13.985,0H57.6a1.011,1.011,0,0,0,1.01-1.01V111.6h1.01a1.011,1.011,0,0,0,1.01-1.01v-4.042A1.01,1.01,0,0,0,59.618,105.542ZM18.243,87.353h31.27a7.081,7.081,0,0,1,7.073,7.073v10.1H42.44V90.385a1.011,1.011,0,0,0-1.01-1.01H17.484L15.9,88.315A5.1,5.1,0,0,1,18.243,87.353Zm22.176,4.042v13.728l-3.746,3.746a1.012,1.012,0,0,0-.3.714v4.042H29.3V91.395Zm-13.136,0v10.1H15.195l2.756-10.1Zm-12.94-1.686,1.669,1.114-2.758,10.112L9.3,98.954A29.258,29.258,0,0,1,14.343,89.708Zm35.17,34.022a5.062,5.062,0,0,1-4.95-4.042h9.9A5.06,5.06,0,0,1,49.513,123.73Zm9.094-14.147H57.6a1.011,1.011,0,0,0-1.01,1.01v7.073H17.128a10.131,10.131,0,0,0-7.023-8.63v-2.485a1.011,1.011,0,0,0-1.01-1.01H6.063v-2.021h1.01a1.01,1.01,0,0,0,.971-.733c.181-.633.379-1.269.586-1.906l5.064,2.532a1.016,1.016,0,0,0,.452.106H27.283v11.115a1.011,1.011,0,0,0,1.01,1.01h9.094a1.011,1.011,0,0,0,1.01-1.01V110l3.451-3.45H56.587a1.011,1.011,0,0,0,1.01,1.01h1.01v2.021Z" transform="translate(0 -85.332)" fill="#f8f8f8" />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <h4 className="ride-title">
                                3 Wheeler
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-comming">
                              <h4 className="ride-title">
                                Comming Soon
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type  ride-comming ride-cat2">
                              <h4 className="ride-title">
                                Comming Soon
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-comming ride-cat3">
                              <h4 className="ride-title">
                                Comming Soon
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                          <div className="col-md-3 col-6 text-center">
                            <a href="#" className="ride-type ride-comming ride-cat4">
                              <h4 className="ride-title">
                                Comming Soon
                              </h4>
                            </a>
                          </div>{/* end inner col */}
                        </div>{/* end inner row */}
                      </div>{/* end ride option */}
                    </div>{/* end ride block */}
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* start ride area */}
          </main>
          {/* end main*/}
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

export default Home

