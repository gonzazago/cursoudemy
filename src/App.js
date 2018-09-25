import React, { Component } from 'react';
import LocationList from './componentes/LocationList';

import './App.css';

const cities =[
    "Buenos Aires,ar",
    "Bogota,col",
    "Mexico,mex",
    "Barcelona,es",
    "Washington,us",
    "Madrid,es",
    "Lima,pe",
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
