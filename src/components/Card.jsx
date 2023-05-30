import React, { Component } from 'react';
import surfReportImg from '../assets/surf-report.png';

class Card extends Component {

    render() { 
        return (
            <div className="card">
                <h3>PROJECT NAME</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src={surfReportImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate, facere ipsum iste deleniti et? Blanditiis sint impedit, recusandae accusantium praesentium quasi nostrum architecto unde, soluta, consequatur commodi atque nulla?</p>
                <div className="card-buttons">
                    <button>Source Code</button>
                    <button>Live Version</button>
                </div>
            </div>
        );
    }
}
 
export default Card;