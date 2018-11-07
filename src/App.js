import React, { Component } from 'react';
import Papper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import LocationList from './componentes/LocationList';
import ForecastExended from './componentes/ForecastExended';

import './App.css';

const cities =[
    "Buenos Aires,ar",
    "Bogota,col",
    "Mexico,mex",
    "Barcelona,es",
    "Madrid,es"
    
];
class App extends Component {

    constructor(){
        super();
        this.state = {city: null}
    }
     handleSelectionLocation = city =>{
      debugger;
      this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
  };

  render() {

      const {city } = this.state;
    return (
        <MuiThemeProvider>
        <Grid>
            <Row>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                            WeatherApp
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Row>
            <Row>
                <Col xs={12} md ={6}>
                    <LocationList cities={cities}
                                  onSelectedLocation={this.handleSelectionLocation}>
                    </LocationList>
                </Col>
                <Col xs={12} md={6}>
                    <Papper zDepth={4}>
                        <div className={'details'}>
                        {
                            city  &&
                                <ForecastExended city={this.state.city}></ForecastExended>
                        }
                        </div>
                    </Papper>

                </Col>
            </Row>
        </Grid>
    </MuiThemeProvider>

    );
  }
}

export default App;
