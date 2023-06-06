import React, { Component } from 'react';
import About from './About';
import SocialBar from './socialBar';

class Nav extends Component {
    state = {
        moduleOpen : false
    }
    render() { 
        return ( 
            <div className="nav">
                <div className="info">
                    <div className="name">
                        <h3>Kieran Croft</h3>
                        <p>Fullstack Software Developer</p>
                    </div>
                    <SocialBar showToastMessage={this.props.showToastMessage}/>
                </div>
                <About showToastMessage={this.props.showToastMessage}/>
            </div>
        );
    }
}
 
export default Nav;