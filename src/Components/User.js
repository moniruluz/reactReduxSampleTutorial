import React, { Component } from 'react';
import Title from './Header/Title';

class User extends Component {
  constructor(){
    super();
    this.state = {
      name: "Uzzal",
      title: "User",
      id:2
    }
  }
  render() {
    return (
        <div className="home">
          <div className="container">
            <div className="row">
                <div className="col-md-12"><Title title={this.state.title}/></div>
            </div>
             <div className="row">
               <div className="col-md-4">
                 <h4>User Name:</h4>
                 <p>User id:</p>
               </div>
             </div>
          </div>
        </div>
    );
  }
}

export default User;
