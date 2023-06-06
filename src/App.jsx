import React, { Component } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import './css/App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { 
    currentPage : "Home",
   } 

  onModeChange = (mode)=>{
    this.setState({currentPage : mode});
  }

  showToastMessage = (text) => {
    toast(text);
  };

  render() { 
    const currentPage = this.state.currentPage;

    return (
      <>
        <Nav showToastMessage={this.showToastMessage} onModeChange={this.onModeChange}/>
        <Content />
        <ToastContainer />
      </>
    );
  }
}
 
export default App;
