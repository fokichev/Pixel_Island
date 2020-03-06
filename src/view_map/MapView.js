import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';

class MapView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    render(){
        return (
            <div className="standardView">
                <div id="mapView">
                    <Link to="/">Quests</Link>
                </div>
            </div>

        );
    }

    componentDidMount(){
        //let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('questView'),null).getPropertyValue('border-width')))) + "px";
        let body_height = "height: " + parseInt(document.body.scrollHeight) + "px";
        document.getElementById("mapView").setAttribute("style", body_height);
    }

}

export default MapView;
