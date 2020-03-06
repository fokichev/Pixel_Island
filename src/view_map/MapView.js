import React, {Component} from 'react';
import '../App.css';

class MapView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    render(){
        return (
            <div className="standardView">
                map view
            </div>

        );
    }

    componentDidMount(){
        //let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('questView'),null).getPropertyValue('border-width')))) + "px";
        //document.getElementById("questView").setAttribute("style", body_height);
    }

}

export default MapView;
