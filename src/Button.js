import React, {Component} from 'react';
import './App.css';
import {withRouter} from "react-router-dom";

class ButtonWorld extends Component {
    constructor(props) {
        super(props);
    }

    //variables
    btn_height;

    render(){
        this.btn_height = this.props.init_height;
        if(this.props.btn_size === "l"){
            this.btn_height = this.btn_height*0.12;
        }
        else if(this.props.btn_size === "m"){
            this.btn_height = this.btn_height*0.07;
        }
        else if(this.props.btn_size === "s"){
            this.btn_height = this.btn_height*0.04;
        }
        else if(this.props.btn_size === "d"){
            this.btn_height = this.btn_height*0.1
        }
        else{
            try{
                this.btn_height = this.btn_height*this.props.btn_size;
            }
            catch{
                alert("Error: button size doesn't match available options, please contact developer.");
            }
        }
        return (
            <img src={this.props.btn_src} class="btn" id={this.props.btn_id} style={{height: this.btn_height + "px"}} onClick={() => this.btnPress()}/>

        )
    }

    btnPress(){
        if(this.props.btn_action.charAt(0) === "/") {
            //change current view
            this.props.history.push(this.props.btn_action);
            alert(window.location.pathname);
            //set nav state to button id
            this.props.handler(this.props.btn_id);

            //make button active
            //document.getElementById(this.props.btn_id).setAttribute("src", this.props.a_btn_src);
        }
        else if(this.props.btn_action === "extend"){
            //todo: make menu expand and retract
            this.props.handler("extend");
        }
        else if(this.props.btn_action.includes("diff") || this.props.btn_action.includes("quest")){
            this.props.handler(this.props.btn_action);
        }
        else if(this.props.btn_action === "card_claim"){
            //alert("claim");
            //alert(this.props.quest_id);
            //pull quest array
            var storage = window.localStorage;
            var questsArray = JSON.parse(storage.getItem("questsArray"));
            //pull card in question
            var questCard;
            var i;
            for (i=0; i < questsArray.length; i++){
                if(questsArray[i].quest_id === this.props.quest_id){
                    //temporarily copy item for later use
                    questCard = questsArray[i];
                    //delete array item specified by ID
                    questsArray.splice(i, 1);
                }
            }
            //push array back to localStorage
            storage.setItem("questsArray", JSON.stringify(questsArray));
            //update balance
            var quest_reward;
                switch(questCard.quest_diff){
                    case "diff_trivial":
                        quest_reward = 10;
                        break;
                    case "diff_easy":
                        quest_reward = 50;
                        break;
                    case "diff_medium":
                        quest_reward = 100;
                        break;
                    case "diff_hard":
                        quest_reward = 200;
                        break;
                }
            var balance = parseInt(storage.getItem("balance"));
            balance = balance + quest_reward;
            storage.setItem("balance", balance.toString());
            //update screen
            this.props.history.push("/");
        }
    }

}

export default withRouter(ButtonWorld);
