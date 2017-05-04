import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userSignupRequest} from '../../Actions/signupAction';
import Title from '../Header/Title';
import Singupform from './SignupForm';

class SignupPage extends Component {
  constructor(){
    super();
    this.state = {
      name: "Amar nam",
      title: "Singup"
    }
  }

  render() {
    const {userSignupRequest} = this.props;
    return (
      <div className="signuppage">
          <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-6">
                  <Title title={this.state.title}/>
                  <Singupform userSignupRequest={userSignupRequest}/>
                  </div>
               </div>
          </div>
        </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state)=>{return {}},{userSignupRequest})(SignupPage);
