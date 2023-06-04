import React, { Component } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import Contact from './components/Contact';
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
    const mode = currentPage === "Home" ? <Hero /> : 
                  currentPage === "Work" ? <Content /> :
                  currentPage === "Contact" ? <Contact /> :
                  <Hero />;

    return (
      <>
        <Nav onModeChange={this.onModeChange}/>
        {mode}
      </>
    );
  }
}
 
export default App;
