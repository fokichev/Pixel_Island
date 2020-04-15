import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';
//import components
import QuestCard from "./QuestCard";
import Button from "../Button";
//import files
import quests_text from "../img/UI/quests_text.png";
import balance_coin from "../img/UI/balance_coin.png";
import btn_settings from "../img/UI/buttons/btn_settings.png";
import poster_img from "../img/UI/demos/1.jpg";

class QuestView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    //variables
    initial_height;
    storage = this.props.storage;

    render(){
        var balance = parseInt(this.storage.getItem("balance"));
        return (
            <div id="questView">
                <div style={{backgroundColor: "#D8A26F"}}>
                    <div id="questHeader">
                        {/*<img src={poster_img} style={{height: "300px", width: "100px"}}/>*/}
                        <img id="questTextImg" src={quests_text}/>
                        <span id="questBalance">
                            {balance}
                            <img id="balanceCoin" src={balance_coin}/>
                        </span>
                    </div>



                    {/*<Button init_height={this.initial_height} btn_src={btn_settings} btn_id="btn_settings" btn_action="/settings" btn_size="m"/>*/}
                    <div id="questCards" style={{height: this.initial_height*0.72 + "px", overflow: "scroll", clear: "both"}}>
                        {this.loadCards()}
                    </div>
                </div>
            </div>

        );
    }

    componentWillMount() {
        this.initial_height = parseInt(document.body.scrollHeight);
    }

    componentDidMount(){
        let i;
        //set questView height
        let body_height = parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('questView'),null).getPropertyValue('border-width')));
        document.getElementById("questView").setAttribute("style", ("height: " + body_height + "px"));
        //set questText height
        let quest_height = this.initial_height*0.07;
        document.getElementById("questTextImg").setAttribute("style", ("height:" + quest_height + "px; margin-top: 10px;"));
    }

    loadCards(){
        var questsArray = JSON.parse(this.storage.getItem("questsArray"));
        //read quests array from localstorage
        if(this.storage.getItem("questsArray") === "" || questsArray.length === 0){
            return <div id="questsEmpty">Create some quests! Use the "+" button below.</div>;
        }
        else{
            {/*iterate through quests array to create cards*/}
            return <div>
            {
                questsArray.map((quest, i) =>
                    <QuestCard initial_height = {this.initial_height} quest_id = {quest.quest_id} quest_name = {quest.quest_name} quest_details = {quest.quest_details} quest_diff = {quest.quest_diff}/>
                )
            }
            </div>;
        }
    }
}

export default QuestView;
