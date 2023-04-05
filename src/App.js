// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'

import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  pageSize = 6; 
  // apiKey = process.env.apiKey; 
  state = {
    progress: 0
  }
  
  setProgress = (progress)=>{
      this.setState({progress:progress}); 
  }
  
  render() {
    return (
      <>
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        loaderSpeed='1000'
        // onLoaderFinished={this.setProgress}
      />
      <Routes>
        <Route exact path="/" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="apple" pageSize={this.pageSize}  category="apple"/>}></Route>
        <Route exact path="/apple" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="facebook" pageSize={this.pageSize} category="facebook"/>}></Route>
        <Route exact path="/microsoft" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="microsoft" pageSize={this.pageSize} category="microsoft"/>}></Route>
        <Route exact path="/google" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="google"pageSize={this.pageSize} category="google"/>}></Route>
        <Route exact path="/capgemini" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="capgemini" pageSize={this.pageSize} category="capgemini"/>}></Route>
        <Route exact path="/amazon" element={ <News apiKey= {"a9199f2e134344bfa92c625cf6378497"} setProgress= {this.setProgress} key="amazon" pageSize={this.pageSize} category="amazon"/>}></Route>               
      </Routes>
      </Router>
      </div>  
      </>
    )
  }
}
