import React, { Component } from 'react';
import About from './About';
import SocialBar from './socialBar';

class Nav extends Component {
    state = {
        moduleOpen : false
    }
    render() { 
        const openModule = ()=>{
            this.setState({moduleOpen : !this.state.moduleOpen});
        }
        return ( 
            <div className="nav">
                <div className="info">
                    <div className="name">
                        <h3>Kieran Croft</h3>
                        <p>Fullstack Software Developer</p>
                    </div>
                    <SocialBar />
                </div>
                <About />
            </div>
        );
    }
}
 
export default Nav;