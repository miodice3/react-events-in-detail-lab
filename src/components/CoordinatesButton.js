// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    
    handleOnClick = (e) => {
        // const ray = [e.clientX, e.clientY]
        // console.log(ray[0], ray[1])
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render(){
        return(
            <button onClick={this.handleOnClick} >coordinates button</button>
        )
    }
}