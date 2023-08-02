import React, { Component } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import LowerNav from './components/LowerNav';
import './css/App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { 
    currentMode : "all",
   } 

  onModeChange = (mode)=>{
    this.setState({currentMode : mode});
  }

  showToastMessage = (text) => {
    toast(text);
  };

  render() { 
    return (
      <>
        <Nav showToastMessage={this.showToastMessage}/>
        <LowerNav onModeChange={this.onModeChange}/>
        <Content currentMode={this.state.currentMode}/>
        <ToastContainer />
      </>
    );
  }
}
 
export default App;
