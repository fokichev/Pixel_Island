import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';

//import files
import new_quest_text from "../img/UI/new_quest_text.png";

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
                    <img className="questTextImg" src={new_quest_text}/>
                </div>
                <div id="newQuestMiddle">middle
                    <div id="newQuestDifficulty">difficulty selectors</div>
                    <div id="newQuestButtons">buttons</div>
                </div>

            </div>
        );
    }

    componentWillMount() {
        this.initial_height = parseInt(document.body.scrollHeight);
    }

    componentDidMount(){
        //set newQuestView height
        let body_height = parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('newQuestView'),null).getPropertyValue('border-width')));
        document.getElementById("newQuestView").setAttribute("style", ("height: " + body_height + "px"));


    }
}

export default NewQuestView;
