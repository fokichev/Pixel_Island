import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import {withRouter} from "react-router-dom";
import '../App.css';

//components
import Button from "../Button";

//files
import new_quest_text from "../img/UI/new_quest_text.png";
import diff_trivial from "../img/UI/difficulties/diff_trivial.png";
import diff_trivial_a from "../img/UI/difficulties/diff_trivial_a.png";
import diff_easy from "../img/UI/difficulties/diff_easy.png";
import diff_easy_a from "../img/UI/difficulties/diff_easy_a.png";
import diff_medium from "../img/UI/difficulties/diff_medium.png";
import diff_medium_a from "../img/UI/difficulties/diff_medium_a.png";
import diff_hard from "../img/UI/difficulties/diff_hard.png";
import diff_hard_a from "../img/UI/difficulties/diff_hard_a.png";
import btn_delete from "../img/UI/buttons/btn_delete.png";
import btn_create from "../img/UI/buttons/btn_create.png";


class NewQuestView extends Component {
    constructor(props) {
        super(props);
        //passing handler to child so child can change parent state
        this.handler = this.handler.bind(this);
        this.state = {
            active_diff: "null"
        };
    }

    //variables
    initial_height;
    storage = this.props.storage;


    handler(btn_action){
        // Button class changes parent class's state
        if (btn_action.includes("diff")){
            this.setState({
                active_diff: btn_action
            });
        }
        else if (btn_action === "quest_delete"){
            //alert(this.storage.getItem("test"));
            alert("delete");
        }
        else if (btn_action === "quest_create"){
            this.createQuestEntry();
        }
        else{
            //do nothing
        }
    }

    render() {
        let btn_comp_trivial, btn_comp_easy, btn_comp_medium, btn_comp_hard;
        let btn_src_trivial = diff_trivial;
        let btn_src_easy = diff_easy;
        let btn_src_medium = diff_medium;
        let btn_src_hard = diff_hard;
        if (this.state.active_diff === "diff_trivial"){
            btn_src_trivial = diff_trivial_a;
        }
        else if(this.state.active_diff === "diff_easy"){
            btn_src_easy = diff_easy_a;
        }
        else if(this.state.active_diff === "diff_medium"){
            btn_src_medium = diff_medium_a;
        }
        else if(this.state.active_diff === "diff_hard"){
            btn_src_hard = diff_hard_a;
        }
        else{
            //do nothing
        }
        btn_comp_trivial = <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_src_trivial} btn_id="btn_diff_trivial" btn_action="diff_trivial" btn_size="d"/>;
        btn_comp_easy = <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_src_easy} btn_id="btn_diff_easy" btn_action="diff_easy" btn_size="d"/>;
        btn_comp_medium = <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_src_medium} btn_id="btn_diff_medium" btn_action="diff_medium" btn_size="d"/>;
        btn_comp_hard = <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_src_hard} btn_id="btn_diff_hard" btn_action="diff_hard" btn_size="d"/>;

        return (
            <div id="newQuestView">
                <div id="newQuestTop">
                    <img src={new_quest_text} id="newQuestTextImg" alt="New Quest!"/>
                    <textarea id="goalTextArea" rows="1" placeholder="What's the goal?"/>
                    <textarea id="detailsTextArea" rows="5" placeholder="Details..."/>
                </div>
                <div id="newQuestMiddle">
                    <div id="newQuestDifficultySpan">Difficulty</div>
                    <div id="newQuestDifficulty">
                        <table id="newQuestTable">
                            <tr>
                                <td>{btn_comp_trivial}</td>
                                <td>{btn_comp_easy}</td>
                                <td>{btn_comp_medium}</td>
                                <td>{btn_comp_hard}</td>
                            </tr>
                            <tr>
                                <td>Trivial</td>
                                <td>Easy</td>
                                <td>Medium</td>
                                <td>Hard</td>
                            </tr>
                        </table>
                    </div>
                    <div id="newQuestButtons">
                        <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_delete} btn_id="btn_quest_delete" btn_action="quest_delete" btn_size="m"/>
                        <Button handler={this.handler} init_height={this.initial_height} btn_src={btn_create} btn_id="btn_quest_create" btn_action="quest_create" btn_size="m"/>
                    </div>
                </div>

            </div>
        );
    }

    createQuestEntry(){
        //read json array into variable
        var questsArray = [];
        if(this.storage.getItem("questsArray") === ""){
            //do nothing
        }
        else{
            questsArray = JSON.parse(this.storage.getItem("questsArray"));
        }
        //append new quest
        var questObject = {
            quest_name: document.getElementById("goalTextArea").value,
            quest_details: document.getElementById("detailsTextArea").value,
            quest_diff: this.state.active_diff
        }
        //make name and difficulty mandatory
        if (!questObject.quest_name || questObject.quest_diff === "null"){
            alert("Please enter the name and select the difficulty!");
        }
        else{
            //alert(quest_name + " " + quest_details + " " + quest_diff);
            //overwrite array back into localStorage
            questsArray.push(questObject);
            this.storage.setItem("questsArray", JSON.stringify(questsArray));
            this.props.history.push("/");
        }

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

export default withRouter(NewQuestView);
