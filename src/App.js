import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './section1.js'
import Section2 from './section2.js'
import Carousel from './Carousel.js'
import Tile from './Tile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
     	  <Section1 />
		  <Section2 />
		  <Carousel />
	</div>
    );
  }
}

export default App;
