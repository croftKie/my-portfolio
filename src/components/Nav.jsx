import React, { Component } from 'react';
import home from '../assets/home.png';
import contact from '../assets/contact.png';
import code from '../assets/code.png';

class Nav extends Component {

    render() { 
        const {onModeChange} = this.props;
        return ( 
            <div className="nav">
                <div className="name">
                    <h3>Kieran Croft</h3>
                    <p>Software Developer</p>
                </div>
                <div className="buttons">
                    <button onClick={()=>{onModeChange('Home')}}><img src={home} alt="" /></button>
                    <button onClick={()=>{onModeChange('Work')}}><img src={code} alt="" /></button>
                    <button onClick={()=>{onModeChange('Contact')}}><img src={contact} alt="" /></button>
                </div>
            </div>
        );
    }
}
 
export default Nav;