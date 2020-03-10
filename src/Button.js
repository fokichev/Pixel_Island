import React, {Component} from 'react';
import './App.css';

class ButtonWorld extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <img src={this.props.btn_src} id="btn" style={{height: this.props.init_height*0.13 + "px"}}/>
            </div>
        )
    }
    onClick(){
        
    }
}

export default ButtonWorld;
