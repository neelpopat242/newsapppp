//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsdetail from './components/Newsdetail';
import About from './components/About';




export default class App extends Component {
  render() {
    return (
      <div>
        {/* <About /> */}
        <Navbar/>
        {/* <About/> */}
        <h2 className="text-center">News Api - India's Top News </h2>
        <Newsdetail pageSize="12" country="in" category="" apiKey="0e939f92a8c14e318c61be0f8c2d9f87"/>
      </div>
    )
  }
} 

 

//6fdfb72de5f148ca9f2c80af3ada7ba8 -API key