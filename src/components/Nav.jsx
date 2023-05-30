import React, { Component } from 'react';

class Nav extends Component {

    valueCheck = (event)=>{
        this.props.onModeChange(event.target.textContent)
    }

    render() { 
        return ( 
            <div className="nav">
                <div className="name">
                    <h3>Kieran Croft</h3>
                    <p>Software Developer</p>
                </div>
                <div className="buttons">
                    <button onClick={this.valueCheck}>Home</button>
                    <button onClick={this.valueCheck}>Work</button>
                    <button onClick={this.valueCheck}>Contact</button>
                </div>
            </div>
        );
    }
}
 
export default Nav;