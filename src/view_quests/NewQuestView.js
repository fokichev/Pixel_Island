import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';

//files
import new_quest_text from "../img/UI/new_quest_text.png"

class NewQuestView extends Component {
    constructor(props) {
        super(props);
        //delete if not needed
    }

    //variables
    initial_height;

    render() {
        return (
            <div id="newQuestView">
                <div id="newQuestTop">
                    <img src={new_quest_text} id="newQuestTextImg" alt="New Quest!"/>
                    <textarea id="goalTextArea" rows="1" placeholder="What's the goal?"/>
                    <textarea id="detailsTextArea" rows="5" placeholder="Details..."/>
                </div>
                <div id="newQuestMiddle">
                    <div id="newQuestDifficulty"></div>
                    <div id="newQuestButtons"></div>
                </div>

            </div>
        );
    }

    componentWillMount() {
        this.initial_height = parseInt(document.body.scrollHeight);
    }

    componentDidMount() {
        let body_height = parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('newQuestView'),null).getPropertyValue('border-width')));
        document.getElementById("newQuestView").setAttribute("style", ("height: " + body_height + "px"));
        //set newQuestText height
        let quest_height = this.initial_height*0.07;
        document.getElementById("newQuestTextImg").setAttribute("style", ("height:" + quest_height + "px; margin-top: 10px;"));
        //set textareas' font size
        let goals_font_size = this.initial_height*0.03;
        //goal
        document.getElementById("goalTextArea").setAttribute("style", ("font-size: " + goals_font_size + "px"));
        //description
        document.getElementById("detailsTextArea").setAttribute("style", ("font-size: " + goals_font_size + "px"));
    }
}

export default NewQuestView;
