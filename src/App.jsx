import React, { Component } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import './css/App.css'

class App extends Component {
  state = { 
    currentPage : "Home",
   } 

  onModeChange = (mode)=>{
    this.setState({currentPage : mode});
  }
  render() { 
    const currentPage = this.state.currentPage;

    return (
      <>
        <Nav onModeChange={this.onModeChange}/>
        <Content />
      </>
    );
  }
}
 
export default App;
