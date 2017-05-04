import React, { Component } from 'react';
import timezones from '../../data/timezones';

class SignupForm extends Component {
  constructor(){
    super();
    this.state={
      username: '',
      email: '',
      password:'',
      passwordComfirmation: '',
      timezone:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render() {
    const options = Object.entries(timezones).map(([val, index]) =>
      <option key={index} value={val} >{index}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community</h1>
        <div className="form-group">
            <label htmlFor="username" className="control-label">Username</label>
            <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="email" className="control-label">Email</label>
            <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="password" className="control-label">Password</label>
            <input value={this.state.password} onChange={this.onChange} type="text" name="password" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="passwordComfirmation" className="control-label">Password Comfirmation</label>
            <input value={this.state.passwordComfirmation} onChange={this.onChange} type="text" name="passwordComfirmation" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="timezone" className="control-label">Timezone</label>
            <select
              value={this.state.timezone}
              onChange={this.onChange}
              name="timezone"
              className="form-control">
              <option value="" disabled>Choose your timezone</option>
              {options}
            </select>
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}


export default SignupForm;
