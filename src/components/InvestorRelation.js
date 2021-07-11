import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class InvestorRelation extends Component {
    render() {
        return (
            <div>
                {/*  Preloader Start */}
          <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
              <div className="preloader-inner position-relative">
                <div className="preloader-circle" />
                <div className="preloader-img pere-text">
                  <img src={require('../images/logo_1.png').default} alt="" />
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
                  {/* <span class="navbar-tag tag-investor">Investor Relations</span> */}
                </a>{/* end navbar-brand */}
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggle-bar">
                    <span className="line-1" />
                    <span className="line-2" />
                    <span className="line-3" />
                  </span>
                </button>{/* end navbar-toggler */}
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto main-menu ">
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

            <OwlCarousel 
            className="banner banner-investor gothi-owl-carousel owl-carousel owl-theme"
            items={1}
            loop={true}
            dots={true}
            nav={false} 
            autoplay={true}
            autoplayTimeout={5000}
            smartSpeed= {2000}
            >
              <div className="investor-banner-single investor-banner-single_1 overlayB50">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="banner-caption">
                        <h2 className="banner-title banner-title2 color_white text-center">
                          Now we are in 80+ area
                        </h2>
                      </div>
                    </div>
                  </div>{/* end row */}
                </div>{/* end container */}
              </div>{/* end investor-banner-single */}
              <div className="investor-banner-single investor-banner-single_2 overlayB50">
                <div className="container">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="banner-caption">
                        <h2 className="banner-title banner-title2 color_white text-center">
                          3000+ Registered Pratner
                        </h2>
                      </div>
                    </div>
                  </div>{/* end row */}
                </div>{/* end container */}
              </div>{/* end investor-banner-single */}
              <div className="investor-banner-single investor-banner-single_3 overlayB50">
                <div className="container">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="banner-caption">
                        <h2 className="banner-title banner-title2 color_white text-center">
                          70+ Million Trip a Day
                        </h2>
                      </div>
                    </div>
                  </div>{/* end row */}
                </div>{/* end container */}
              </div>{/* end investor-banner-single */}
            </OwlCarousel>{/* end banner */}

            <div className="section-padding bg_gray">
              <div className="container">
                <div className="row text-center">
                  <div className=" col-md-12 col-lg-10 mx-auto">
                    <ul className="investor-menu">
                      <li><a href="#">Governance</a></li>
                      <li><a href="#">Financials</a></li>
                      <li><a href="#">News &amp; Events</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end section */}
            <section className=" section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner-caption ceo-banner-caption">
                      <h2 className="banner-title">
                        Our Vision
                      </h2>
                      <p className="mb-40 vission-text color_secondary">
                        Our vision is to be a partner of choice in this area at international
                        level by providing innovative, creative, reliable and optimum solution
                        to every corner of the globe.
                      </p>
                      <ul className="leader-list d-lg-flex justify-content-between">
                        <li>
                          <a href="#">
                            A Letter Form Our CEO, Khaled
                            <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            A Letter Form Our Chairman, D. Mostafizur Rahman
                            <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end ceo message */}
            {/* start events section */}
            <section className="newsevents-section  overlayB50 bg_gray section-padding">
              <div className="container">
                <div className="row">
                  <h2 className="section-title text-center color_white text-uppercase">
                    News &amp; Events
                  </h2>
                </div>{/* end row */}
                <div className="row gutter-30">
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events1.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent News</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events2.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent News</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events3.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent News</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events4.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent Events</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events5.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent Events</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <a className="event-block" href="#">
                      <img src={require('../images/events6.jpg').default} className="img-fluid" alt="" />
                      <div className="event-overlay">
                        <h4 className="event-title ">Recent Events</h4>
                        <p className="event-desc ">A Training Program Of Chattagram</p>
                        <p className="event-date font-blue">Dec 1, 2020 at 6PM BD</p>
                      </div>
                    </a>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end section */}
            {/* start events section */}
            <section className="corp-responsibility-section   section-padding">
              <div className="container">
                <div className="row">
                  <h2 className="section-title text-center  text-uppercase">
                    Corporate Responsibility
                  </h2>
                </div>{/* end row */}
                <div className="row gutter-30">
                  <div className="col-md-6 col-lg-4">
                    <div className="corp-resp-block corp-resp-block-mt">
                      <img src={require('../images/corp_resp_img1.jpg').default} className="img-fluid" alt="" />
                      <div className="corp-resp-overlay">
                        <h4 className="corp-resp-title text-uppercase">short profile-2021</h4>
                        <p className="corp-resp-desc ">
                          On "profile" page, you can check the
                          gothi's profiles, "recent activity"
                          and "gantt chart".
                        </p>
                        <div className="corp-resp-overlay-icons">
                          <a href="#" download><i className="fas fa-download" /></a>
                          <a href="#"><i className="far fa-eye" /></a>
                        </div>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <div className="corp-resp-block">
                      <img src={require('../images/corp_resp_img2.jpg').default} className="img-fluid" alt="" />
                      <div className="corp-resp-overlay">
                        <h4 className="corp-resp-title text-uppercase">ESG report</h4>
                        <p className="corp-resp-desc ">
                          At gothi, we believe that sustainability is integral
                          environmental, social and governance
                          (ESG) report outlines the many ways in which
                          gothi builds value and, through its core
                          business and social impact activities, helps to
                          make the globe a batter place.
                        </p>
                        <div className="corp-resp-overlay-icons">
                          <a href="#" download><i className="fas fa-download" /></a>
                          <a href="#"><i className="far fa-eye" /></a>
                        </div>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-md-6 col-lg-4">
                    <div className="corp-resp-block corp-resp-block-mt">
                      <img src={require('../images/corp_resp_img3.jpg').default} className="img-fluid" alt="" />
                      <div className="corp-resp-overlay">
                        <h4 className="corp-resp-title text-uppercase">earning supplemental data </h4>
                        <p className="corp-resp-desc ">
                          Annual reports &amp; supplemental information
                          investor &amp; shareholder services
                          financial information fixed income
                          stock &amp; dividend information.
                        </p>
                        <div className="corp-resp-overlay-icons">
                          <a href="#" download><i className="fas fa-download" /></a>
                          <a href="#"><i className="far fa-eye" /></a>
                        </div>
                      </div>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end section */}
            {/* start leadership lead */}
            <div className="offering-head bg_gray shadow py-5">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="offter-caption">
                      <h2 className="color_secondary mb-30">LEADERSHIP</h2>
                      <p className="color_secondary mb-0 fs-5 lh-base">
                        There's room at gothi for every talent and talent from almost everywhere.
                        we'd love for you to join us. discover the right role for you.
                      </p>
                    </div>
                  </div>
                </div>{/* end row */}
              </div>{/* end container */}
            </div>{/* end offering head */}
            {/* start leadership  section */}
            <section className="leadership-section section-padding">
              <div className="container">
                <div className="row gutter-30">
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="leader-profile">
                      <div className="leader-progile-thumbs">
                        <img src={require('../images/leader_img1.jpg').default} className="img-fluid" alt="" />
                      </div>
                      <div className="leader-progile-content">
                        <h4 className="leader-profile-name">Amanullah</h4>
                        <h6 className="leader-profile-designation ">
                          Graphics Designer
                        </h6>
                      </div>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end container */}
            </section>{/* end leadership section */}
          </main>
          {/* footer */}
          <footer className="footer" style={{backgroundImage: 'url({require("../images/footer_bg.png")})'}}>
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
                        <li><a href="#"><img src={require('../images/playstore.png').default} height={60} alt="" className="mb-15" /></a></li>
                        <li><a href="#"><img src={require('../images/appstore.png').default} height={60} alt="" /></a></li>
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

export default InvestorRelation
