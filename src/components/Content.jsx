import React, { Component } from 'react';
import Card from './Card';
import surfer from '../assets/surfer.png';
import clapper from '../assets/clapperboard.png';
import cardGraphic from '../assets/proj.png';

class Content extends Component {
    state = {
        projects : [
            {img : surfer, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : clapper, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'},
            {img : cardGraphic, live_link : 'https://croftkie.github.io/surf-report-live/', source_link : 'https://github.com/croftKie/surf-report-live'}
        ]
    }

    render() { 
        return (
            <div className="content">
                {this.state.projects.map((item, index)=>{
                    return <Card source_link={item.source_link} live_link={item.live_link} img={item.img}/>
                })}
            </div>
        );
    }
}
 
export default Content;