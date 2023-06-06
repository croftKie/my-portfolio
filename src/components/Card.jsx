import React, { Component } from 'react';
import code from '../assets/codeFav.png';

class Card extends Component {
    state={
        showSource : false
    }
    render() { 
        const showSourceCodeLink = ()=>{
            this.setState({showSource : !this.state.showSource})
        }
        console.log(this.props.img);

        return (
            <div onMouseEnter={showSourceCodeLink} onMouseLeave={showSourceCodeLink} className="card">
                <a href={this.props.live_link} target='_blank'><img src={this.props.img} alt="" /></a>
            </div>
        );
    }
}
 
export default Card;