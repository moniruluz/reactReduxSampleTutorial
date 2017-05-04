import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Amar nam",
      title: "welcome sir"
    }
  }
  changeTitle(title){
    this.setState({title});
  }
  render() {
    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
