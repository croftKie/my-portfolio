import React, { Component } from 'react';
import gh from '../assets/github.png';
import li from '../assets/linkedin.png';
import em from '../assets/email.png';

class Hero extends Component {

    render() { 
        return ( 
            <div className="hero">
                <h2>Hi!</h2>
                <h1>I'm a Fullstack Software Developer</h1>
                <h4>A.K.A I build things for the web.</h4>
                <p>I'm a motivated and creative Software Developer with experience creating robust web applications utilising modern front-end and back-end technologies, particularly React, NodeJS and the modern Javascript ecosystem.</p>
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
 
export default Hero;