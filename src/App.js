//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsdetail from './components/Newsdetail';




export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h2 className="text-center">News Api - India's Top News </h2>
        <Newsdetail pageSize="12" country="in" category="giit" apiKey="6fdfb72de5f148ca9f2c80af3ada7ba8"/>
        
        
      </div>
    )
  }
} 

 

//6fdfb72de5f148ca9f2c80af3ada7ba8 -API key