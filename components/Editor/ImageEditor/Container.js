import React, { Component } from 'react'
import Presentation from "./Presentation"
export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    
    render() {
        // console.log(localimages)
        return (
            <Presentation 
            {...this.state}
            {...this.props}
            />
        )
    }
}

export default Container
