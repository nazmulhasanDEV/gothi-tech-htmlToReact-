import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// component list
import Home from './components/Home';
import FourZeroFour from './components/FourZeroFour';
import About from './components/About';
import ApplyToAgent from './components/ApplyToAgent';
import ApplyToAgent2 from './components/ApplyToAgent2';
import ApplyTord from './components/ApplyTord';
import ApplyTord2 from './components/ApplyTord2';
import ApplyTord3 from './components/ApplyTord3';
import Business from './components/Business';
import ContactUs from './components/ContactUs';
import CreateNewPassword from './components/CreateNewPassword';
import EnterOtpCode from './components/EnterOtpCode';
import EnterPassword from './components/EnterPassword';
import ForgotPassword from './components/ForgotPassword';
import Help from './components/Help';
import InvestorRelation from './components/InvestorRelation';
import Login from './components/Login';
import Partner from './components/Partner';
import Rider from './components/Rider';
import SignUpToDrive from './components/SignUpToDrive';
import SignUpToDrive2 from './components/SignUpToDrive2';
import SignUpToDrive3 from './components/SignUpToDrive3';
import SignUpToDrive4 from './components/SignUpToDrive4';
import SignUpToDrive5 from './components/SignUpToDrive5';
import SignUpToRide from './components/SignUpToRide';
import SignUpToRide1 from './components/SignUpToRide1';
import SignUpToRide2 from './components/SignUpToRide2';
import SignUpToRide3 from './components/SignUpToRide3';
import ThankYou from './components/ThankYou';
import Ride from './test/Ride';


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* index.html  */}
          <Route exact path='/' component={Home} />

          {/* 404.html  */}
          <Route exact path='/404' component={FourZeroFour} />

          {/* about.html */}
          <Route exact path='/about' component={About} />

          {/* applyToAgent.html */}
          <Route exact path='/applyTo/agent' component={ApplyToAgent} />

          {/* applyToAgent2.html */}
          <Route exact path='/applyTo/agent/two' component={ApplyToAgent2} />

          {/* applytord.html */}
          <Route exact path='/applyTo/ord' component={ApplyTord} />

          {/* applytord2.html */}
          <Route exact path='/applyTo/ord/two' component={ApplyTord2} />

          {/* applytord3.html */}
          <Route exact path='/applyTo/ord/three' component={ApplyTord3} />

          {/* business.html */}
          <Route exact path='/business' component={Business} />

          {/* contact.html */}
          <Route exact path='/contact/us' component={ContactUs} />

          {/* createnewpassword.html */}
          <Route exact path='/create/new/password' component={CreateNewPassword} />

          {/* enterotpcode.html */}
          <Route exact path='/enter/otp/code' component={EnterOtpCode} />

          {/* enterpassword.html */}
          <Route exact path='/enter/password' component={EnterPassword} />

          {/* forgotpassword.html */}
          <Route exact path='/forgot/password' component={ForgotPassword} />

          {/* forgotpassword.html */}
          <Route exact path='/help' component={Help} />

          {/* investorrelation.html */}
          <Route exact path='/investor/relation' component={InvestorRelation} />

          {/* login.html */}
          <Route exact path='/login' component={Login} />

          {/* partner.html */}
          <Route exact path='/partner' component={Partner} />

          {/* rider.html */}
          <Route exact path='/rider' component={Rider} />

          {/* signuptodrive.html */}
          <Route exact path='/signup/to/drive' component={SignUpToDrive} />

          {/* signuptodrive2.html */}
          <Route exact path='/signup/to/drive2' component={SignUpToDrive2} />

          {/* signuptodrive3.html */}
          <Route exact path='/signup/to/drive3' component={SignUpToDrive3} />

          {/* signuptodrive4.html */}
          <Route exact path='/signup/to/drive4' component={SignUpToDrive4} />

          {/* signuptodrive5.html */}
          <Route exact path='/signup/to/drive5' component={SignUpToDrive5} />

          {/* signuptoride.html */}
          <Route exact path='/signup/to/ride' component={SignUpToRide} />

          {/* signuptoride1.html */}
          <Route exact path='/signup/to/ride1' component={SignUpToRide1} />

          {/* signuptoride2.html */}
          <Route exact path='/signup/to/ride2' component={SignUpToRide2} />

          {/* signuptoride3.html */}
          <Route exact path='/signup/to/ride3' component={SignUpToRide3} />

          {/* thankyou.html */}
          <Route exact path='/thankyou' component={ThankYou} />

          {/* thankyou.html */}
          <Route exact path='/test/ride' component={Ride} />

        </Switch>
      </Router>
    </div>
  )
}
