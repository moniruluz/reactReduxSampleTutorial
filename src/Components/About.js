import React, { Component } from 'react';
import Title from './Header/Title';

class About extends Component {
  constructor(){
    super();
    this.state = {
      name: "Amar nam",
      title: "About Us"
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
                 <h2>Heading</h2>
                 <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                 <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
               </div>
               <div className="col-md-4">
                 <h2>Heading</h2>
                 <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                 <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
              </div>
               <div className="col-md-4">
                 <h2>Heading</h2>
                 <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                 <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
               </div>
             </div>
          </div>
        </div>
    );
  }
}

export default About;
