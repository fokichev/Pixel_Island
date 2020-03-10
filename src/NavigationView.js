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
        //temp
        this.state = {
            active_view: "quests"
        };
    }
    render(){
        return (
            <div id="navDiv">
                <table style={{alignSelf: "center"}}>
                    <tr>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_world} a_btn_src={btn_world_a} btn_id="btn_world" btn_action="/map" btn_size="l"/></td>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_quests} a_btn_src={btn_quests_a} btn_id="btn_quests" btn_action="/" btn_size="l"/></td>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_shop} a_btn_src={btn_shop_a} btn_id="btn_shop" btn_action="/shop" btn_size="l"/></td>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_ext} a_btn_src={btn_ext_a} btn_id="btn_ext" btn_action="" btn_size="s"/></td>
                        <td><Button init_height={parseInt(document.body.scrollHeight)} btn_src={btn_plus} a_btn_src={btn_plus} btn_id="btn_plus" btn_action="" btn_size="m"/></td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default NavigationView;
