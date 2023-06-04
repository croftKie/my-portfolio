import React, { Component } from 'react';
import right from '../assets/right-arrow.png';
import left from '../assets/left-arrow.png';


class About extends Component {
    state = {
        moduleOpen : false
    }
    render() { 
        const openModule = ()=>{
            this.setState({moduleOpen : !this.state.moduleOpen});
        }
        const modes = {
            open :  
                <>
                    <div className="about open">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum odio assumenda deleniti dolore soluta totam expedita, provident voluptatibus exercitationem.</p>
                        <p>Skills:</p>
                        <p>React - Redux - Nodejs - Vue - C#</p>
                    </div>
                    <img onClick={openModule} src={left} alt="" />
                </>,
            close : 
                <>
                    <img onClick={openModule} src={right} alt="" />
                </>
        }
        return (
            <>
            {this.state.moduleOpen ? modes.open : modes.close}
            </>
        );
    }
}
 
export default About;