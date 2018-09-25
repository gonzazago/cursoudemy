import React, { Component } from 'react';
import LocationList from './componentes/LocationList';

import './App.css';

const cities =[
    "Buenos Aires,ar",
    "Bogota,col",
    "Mexico,mex",
    "Barcelona,es",
    "Madrid,es",
    "Cordoba,ar"
    
];
class App extends Component {
  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation");
  }

  render() {
    return (
      
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
