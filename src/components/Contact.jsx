import React, { Component } from 'react';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="contact">
                <h3>Get in Touch:</h3>
                <div>
                    <p>LinkedIn</p>
                    <p>Github</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
                <button>Download my CV</button>
            </div>
        );
    }
}
 
export default Contact;