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
import btn_settings from "../img/UI/buttons/btn_settings.png";

class QuestView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    //variables
    initial_height;
    storage = this.props.storage;

    render(){
        //alert(JSON.parse(this.storage.getItem("questsArray")));
        var questsArray = [];
        //read quests array from localstorage
        if(this.storage.getItem("questsArray") === ""){
            //do nothing
            alert("helloooo");
        }
        else{
            questsArray = JSON.parse(this.storage.getItem("questsArray"));
            //alert("shits going down");
        }

        //var questsArray = JSON.parse(this.storage.getItem("questsArray"));
        // if (questsArray.length < 1){
        //     em
        // }
        //alert(questsArray.length);



        return (
            <div id="questView">
                <div style={{backgroundColor: "#D8A26F"}}>
                    <img id="questTextImg" src={quests_text}/>
                    {/*<img id="btnSettings" src={btn_settings} style={{selfAlign: "right"}}/>*/}
                    {/*<Button init_height={this.initial_height} btn_src={btn_settings} btn_id="btn_settings" btn_action="/settings" btn_size="m"/>*/}
                    <div id="questCards" style={{height: this.initial_height*0.72 + "px", overflow: "scroll"}}>
                        {/*iterate through quests array to create cards*/}
                        <QuestCard initial_height = {this.initial_height}/>
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
}

export default QuestView;
