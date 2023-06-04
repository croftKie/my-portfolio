import React, { Component } from 'react';
import cardGraphic from '../assets/cardGraphic.png';

class Card extends Component {

    render() { 
        return (
            <div className="card">
                <img src={cardGraphic} alt="" />
            </div>
        );
    }
}
 
export default Card;