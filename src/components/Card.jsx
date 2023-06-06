import React, { Component } from 'react';
import code from '../assets/codeFav.png';
import right from '../assets/right-arrow.png';

class Card extends Component {
    state={
        animSource : false
    }
    render() { 
        const showSourceCodeLink = ()=>{
            this.setState({animSource : !this.state.animSource})
        }

        return (
            <>
                <div onMouseEnter={showSourceCodeLink} onMouseLeave={showSourceCodeLink} className="card">
                    <a href={this.props.live_link} target='_blank'><img src={this.props.img} alt="" /></a>
                    <div className="sourceCodeModule">
                        <img src={code} alt="" />
                        <a href={this.props.source_link} target='_blank'><h4>source code</h4></a>
                        <img className= {this.state.animSource ? 'rightImg rightImgAnimated' : 'rightImg'} src={right} alt="" />
                    </div>
                </div>

            </>

        );
    }
}
 
export default Card;