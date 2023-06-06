import React, { Component } from 'react';
import gh from '../assets/github.png';
import li from '../assets/linkedin.png';
import em from '../assets/email.png';

class SocialBar extends Component {
    state = {  } 
    render() { 
        return (
        <div className='socialButtons'>
            <img src={gh} alt="" />
            <img src={li} alt="" />
            <img onClick={()=>{this.props.showToastMessage('Get in touch - kiecroft@proton.me')}} src={em} alt="" />
        </div>
        );
    }
}
 
export default SocialBar;