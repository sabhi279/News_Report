import logo from './logo.svg';
import './App.css';
// import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './compo/Navbar';
import News from './compo/News';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API ;

  // state ={
  //   progress : 0
  // }

  // setProgress=()=>{
  //   this.setState({progress : progress})
  // }

  render() {
    return (
      <div>
        <Navbar/>
        
        {/* <LoadingBar
        color = '#f11946'
        progress={progress}
        /> */}

        <Routes>

        <Route exact path="Home" element={<News apikey={this.apikey} key ="general"  country= "in" category ="general"/>} />
        <Route exact path="" element={<News apikey={this.apikey} key ="general"  country= "in" category ="general"/>} />
        <Route exact path="business" element={<News apikey={this.apikey} key ="business"  country= "in" category ="business"/>} />
        <Route exact path="sports" element={<News apikey={this.apikey} key ="sports"  country= "in" category ="sports"/>} />
        <Route exact path="health" element={<News apikey={this.apikey} key ="health"  country= "in" category ="health"/>} />
        <Route exact path="science" element={<News apikey={this.apikey} key ="science"  country= "in" category ="science"/>} />
        <Route exact path="entertainment" element={<News apikey={this.apikey} key ="entertainment"  country= "in" category ="entertainment"/>} />
        {/* <Route exact path="entertainment" element={<News apikey={this.apikey} key ="technology"  country= "in" category ="technology"/>} /> */}

      </Routes>
      </div>
    )
  }
}

