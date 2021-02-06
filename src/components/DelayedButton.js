// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    
    handleOnClick = (e) => {
        // const eventToSave = e.target;
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)}, this.props.delay);        
    }
    
    render(){
        return(
            <button onClick={this.handleOnClick} >Delayed Button</button>
        )
    }
}