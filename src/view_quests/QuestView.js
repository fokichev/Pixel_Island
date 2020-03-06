import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';

class QuestView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    render(){
        return (
            <div className="standardView">
                <div id="questView">
                    <div>
                        <Link to="/map">Map</Link>
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount(){
        let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('questView'),null).getPropertyValue('border-width')))) + "px";
        document.getElementById("questView").setAttribute("style", body_height);
    }
}

export default QuestView;
