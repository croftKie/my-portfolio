import React, { Component } from 'react';
import Card from './Card';

class Content extends Component {
    state = {
        projects : [
            {},
            {},
            {}
        ]
    }

    render() { 
        return (
            <div className="content">
                {this.state.projects.map((item, index)=>{
                    return <Card />
                })}
            </div>
        );
    }
}
 
export default Content;