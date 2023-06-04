import React, { Component } from 'react';
import gh from '../assets/github.png';
import li from '../assets/linkedin.png';
import em from '../assets/email.png';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="contact">
                <h1>Thanks for checking out my portfolio</h1>
                <p>If you want to get in touch with me, check out the links below:</p>
                <div className='heroButtons'>
                    <button>Download my CV</button>
                    <button>See my Work</button>
                </div>
                <div className='socialButtons'>
                    <img src={gh} alt="" />
                    <img src={li} alt="" />
                    <img src={em} alt="" />
                </div>
            </div>
        );
    }
}
 
export default Contact;