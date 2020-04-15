import React, {Component} from 'react';
import '../App.css';

//import files
import img_poster from "file:///map/src/view_map/poster.png";
// import img_1 from "../img/UI/demos/1.PNG";
// import img_2 from "../img/UI/demos/2.PNG";
// import img_3 from "../img/UI/demos/3.PNG";
// import img_4 from "../img/UI/demos/4.PNG";
// import img_5 from "../img/UI/demos/5.PNG";

class MapView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    render(){
        return (
            <div className="standardView">
                <div id="mapView">
                    <img src={img_poster} style={{height: "300px", width: "200px"}}/>
                    <div id="mapStart">
                        <div id="mapTop">
                            This app is an early prototype! Map coming in the future.
                            <br/>
                            Demos:
                        </div>
                        <div id="mapDemos">
                            {/*<img src={poster}/>*/}
                            {/*<img src={img_1}/>*/}
                            {/*<img src={img_2}/>*/}
                            {/*<img src={img_3}/>*/}
                            {/*<img src={img_4}/>*/}
                            {/*<img src={img_5}/>*/}
                        </div>
                        <div id="mapBottom">
                            Scroll sideways for more demo shots.
                        </div>
                    </div>

                </div>
            </div>

        );
    }

    componentDidMount(){
        let body_height = "height: " + (parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('mapView'),null).getPropertyValue('border-width')))) + "px";
        //let body_height = "height: " + parseInt(document.body.scrollHeight) + "px";
        document.getElementById("mapView").setAttribute("style", body_height);
    }

}

export default MapView;
