import React, { Component } from 'react';

class Hero extends Component {

    render() { 
        return ( 
            <div className="hero">
                <h4>Hi, I am...</h4>
                <h1>Kieran Croft</h1>
                <h4>I build things for the web</h4>
                <p>Motivated and creative Software Developer with experience creating robust web applications utilising modern front-end and back-end technologies, particularly React, NodeJS and the modern Javascript ecosystem.</p>
                <div className='heroButtons'>
                    <button>Download my CV</button>
                    <button>See my Work</button>
                </div>
                <div className='socialButtons'>
                    <p>LinkedIn</p>
                    <p>Github</p>
                    <p>Email</p>
                </div>
            </div>
        );
    }
}
 
export default Hero;