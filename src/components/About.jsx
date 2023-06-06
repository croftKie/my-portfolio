import React, { Component } from 'react';
import js from '../assets/js.png';
import ts from '../assets/ts.png';
import reactimg from '../assets/react.png';
import git from '../assets/git.png';
import reduximg from '../assets/redux.png';
import sass from '../assets/sass.png';
import nodejs from '../assets/node.png';
import csharp from '../assets/csharp.png';


class About extends Component {
    state = {
        js : 'ES6 Javascript for responsive front-end',
        react : 'Class based and functional React SPA development using Redux and Router',
        redux : 'Redux for complex state management of web-based SPA',
        node : 'NodeJS development for scalable back-end development and proxy server development',
        sass : 'Multi-page website and SPA styling using detailed variable management',
        ts : 'Strongly-typed JS for improved development speed and error management',
        git : 'Managed single and collaborative projects through GitHub and version control through Git',
        csharp : 'Created CLI tooling using core C# programming concepts'

    }
    render() { 
        const {showToastMessage} = this.props;
        return (
            <div className="about open">
                <p>I build things for the web.</p>
                <p>Experienced in front-end and back-end web development, I create robust applications using a range of technologies.</p>
                <div className="skills">
                    <img onClick={()=>{showToastMessage(this.state.js)}} src={js} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.react)}} src={reactimg} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.redux)}} src={reduximg} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.node)}} src={nodejs} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.sass)}} src={sass} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.ts)}} src={ts} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.git)}} src={git} alt="" />
                    <img onClick={()=>{showToastMessage(this.state.csharp)}} src={csharp} alt="" />
                </div>
            </div>
        );
    }
}
 
export default About;