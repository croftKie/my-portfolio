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
                {this.state.showSource ? <h3><a href={this.props.source_link} target='_blank'><img src={code}/>Source Code</a></h3> : <></>}
            </div>
        );
    }
}
 
export default Card;