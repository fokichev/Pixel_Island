import React, {Component} from 'react';
import '../App.css';
import twiggy from "../img/UI/under_construction.png";
import house from "../img/UI/house.png";

class MapView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    //variables
    final_width;

    render(){
        return (
            <div className="standardView">
                <div id="mapView">
                    <div id="mapStart">
                        <div id="mapTop">
                            <img src={house}/><br/>
                            This app is an early prototype! Map coming in the future.
                        </div>
                        <div id="mapBottom">
                            Please look inside the demos folder to see what this page will look like.
                            <img style={{maxWidth: this.final_width + "px", marginTop: this.final_width*0.05 + "px"}} src={twiggy}/>
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
        let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('mapView'),null).getPropertyValue('border-width')))) + "px";
        document.getElementById("mapView").setAttribute("style", body_height);

    }

}

export default MapView;
