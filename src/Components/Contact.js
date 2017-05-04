import React, { Component } from 'react';

class Contact extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      

     React.createElement('form', null,
      React.createElement('label', {htmlFor:'email'},'Email:'),
      React.createElement('input', {
        type: 'email',
        id: 'email',
        className: 'form-control-id',
      }),
       React.createElement('button', {type: 'submit'}, "Add Contact")

    )
    );
  }
}

export default Contact;
