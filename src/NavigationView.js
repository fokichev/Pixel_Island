import React, {Component} from 'react';
import './App.css';
import {
    Link, Redirect
} from "react-router-dom";
import Button from "./Button";

//buttons
import btn_ext from "./img/UI/buttons/btn_ext.png";
import btn_ext_a from "./img/UI/buttons/btn_ext_a.png";
import btn_place from "./img/UI/buttons/btn_place.png";
import btn_plus from "./img/UI/buttons/btn_plus.png";
import btn_quests from "./img/UI/buttons/btn_quests.png";
import btn_quests_a from "./img/UI/buttons/btn_quests_a.png";
import btn_shop from "./img/UI/buttons/btn_shop.png";
import btn_shop_a from "./img/UI/buttons/btn_shop_a.png";
import btn_world from "./img/UI/buttons/btn_world.png";
import btn_world_a from "./img/UI/buttons/btn_world_a.png";

class NavigationView extends Component {
    constructor(props) {
        super(props);
        //passing handler to child so child can change parent state
        this.handler = this.handler.bind(this);
        this.state = {
            active_view: "btn_quests",
            extended: true
        };
    }

    handler(btn_action){
        // Button class changes parent class's state
        if (btn_action.includes("btn")){
            this.setState({
                active_view: btn_action
            });
        }
        else if(btn_action === "extend"){
            this.setState(prevState => ({
               extended: !prevState.extended
            }));
        }

    }

    render(){
        //making the active button be highlighted
        let btn_comp_world, btn_comp_quests, btn_comp_shop, btn_comp_ext;
        let btn_src_world = btn_world;
        let btn_src_quests = btn_quests;
        let btn_src_shop = btn_shop;
        let btn_src_ext = btn_ext;
        //nav buttons
        if (this.state.active_view === "btn_world"){
            btn_src_world = btn_world_a;
        }
        else if (this.state.active_view === "btn_quests"){
            btn_src_quests = btn_quests_a;
        }
        else if (this.state.active_view === "btn_shop"){
            btn_src_shop = btn_shop_a;
        }
        else{
            alert("something has gone wrong");
        }
        //expanded button
        if (this.state.extended){
            btn_src_ext = btn_ext_a;
        }
        btn_comp_world = <Button handler={this.handler} init_height={parseInt(document.body.scrollHeight)} btn_src={btn_src_world} btn_id="btn_world" btn_action="/map" btn_size="l"/>;
        btn_comp_quests = <Button handler={this.handler} init_height={parseInt(document.body.scrollHeight)} btn_src={btn_src_quests} btn_id="btn_quests" btn_action="/" btn_size="l"/>;
        btn_comp_shop = <Button handler={this.handler} init_height={parseInt(document.body.scrollHeight)} btn_src={btn_src_shop} btn_id="btn_shop" btn_action="/shop" btn_size="l"/>;
        btn_comp_ext = <Button handler={this.handler} init_height={parseInt(document.body.scrollHeight)} btn_src={btn_src_ext} btn_id="btn_ext" btn_action="extend" btn_size="s"/>;
        return (
            <div id="navDiv">
                <table style={{alignSelf: "center"}}>
                    <tr>
                        {/*nav*/}
                        <td>{btn_comp_world}</td>
                        <td>{btn_comp_quests}</td>
                        <td>{btn_comp_shop}</td>
                        {/*end nav*/}
                        <td>{btn_comp_ext}</td>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_plus} btn_id="btn_plus" btn_action="/newQuest" btn_size="m"/></td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default NavigationView;
