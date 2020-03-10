import React, {Component} from 'react';
import './App.css';

class ButtonWorld extends Component {
    constructor(props) {
        super(props);
    }

    //variables
    btn_height;

    render(){
        //alert(this.props.btn_size);
        this.btn_height = this.props.init_height;
        if(this.props.btn_size == "l"){
            this.btn_height = this.btn_height*0.12;
        }
        else if(this.props.btn_size == "m"){
            this.btn_height = this.btn_height*0.07;
        }
        else if(this.props.btn_size == "s"){
            this.btn_height = this.btn_height*0.04;
        }
        else{
            alert("btn error");
        }
        return (
            <img src={this.props.btn_src} class="btn" id="btn" style={{height: this.btn_height + "px"}}/>


        )
    }

    onClick(){

    }
}

export default ButtonWorld;
