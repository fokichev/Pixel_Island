import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from "react-router-dom";

class ButtonWorld extends Component {
    constructor(props) {
        super(props);
    }

    //variables
    btn_height;

    render(){
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
            // <Link to={this.props.btn_action}>
            <img src={this.props.btn_src} class="btn" id={this.props.btn_id} style={{height: this.btn_height + "px"}} onClick={() => this.btnPress()}/>
            //</Link>

        )
    }

    btnPress(){
        if(this.props.btn_action.charAt(0) === "/") {
            //change current view
            this.props.history.push(this.props.btn_action);
        }
        document.getElementById(this.props.btn_id).setAttribute("src", this.props.a_btn_src);
    }

}

export default withRouter(ButtonWorld);
