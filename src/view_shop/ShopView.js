import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';
import tommy from "../img/UI/under_construction_tommy.png";
import shop from "../img/UI/shop_text.png";

class ShopView extends Component {
    constructor(props) {
        super(props);
        //delete if not needed
    }

    //variables
    final_width;

    render() {
        return (
            <div className={"standardView"}>
                <div id="shopView">
                    <div id="shopStart">
                        <div id="shopTop">
                            <img src={shop}/><br/>
                            This app is an early prototype! Shop coming in the future.
                        </div>
                        <div id="shopBottom">
                            Please look inside the demos folder to see what this page will look like.
                            <img style={{maxWidth: this.final_width + "px", marginTop: this.final_width*0.05 + "px"}} src={tommy}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    componentWillMount() {
        this.final_width = parseInt(document.body.scrollWidth) - 60;
    }

    componentDidMount(){
        let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('shopView'),null).getPropertyValue('border-width')))) + "px";
        document.getElementById("shopView").setAttribute("style", body_height);

    }
}

export default ShopView;
