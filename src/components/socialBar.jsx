import React, { Component } from 'react';
import gh from '../assets/github.png';
import li from '../assets/linkedin.png';
import em from '../assets/email.png';

class SocialBar extends Component {
    state = {  } 
    render() { 
        return (
        <div className='socialButtons'>
            <a target='_blank' href="https://github.com/croftKie"><img src={gh} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/kieran-croft/"><img src={li} alt="" /></a>
            <img onClick={()=>{this.props.showToastMessage('Get in touch - kiecroft@proton.me')}} src={em} alt="" />
        </div>
        );
    }
}
 
export default SocialBar;