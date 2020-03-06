import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import '../App.css';

class QuestView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }
    
    render(){
        return (
            <div className="standardView">
                <div id="questView">hello</div>
            </div>

        );
    }

    componentDidMount(){
        let body_height = "height: " + (parseInt(document.body.scrollHeight) - 60) + "px";
        document.getElementById("questView").setAttribute("style", body_height);
    }
}

export default QuestView;
