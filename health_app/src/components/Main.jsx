import React, { Component } from 'react';
import MainInfoBox from './MainInfoBox';
import health_pic from './health_pic.jpg';

class Main extends Component {
  render() {
        return (
            <div className="container">

            <MainInfoBox/> 

            <img src={health_pic} width="500" height="350" />

            </div>
        );
    }
}

export default Main;