import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';

class SettingsView extends Component {
    constructor(props) {
        super(props);
        //delete if not needed
    }

    render() {
        return (
            <div id="settingsView">
                <p>settings</p>
                <button>ok</button>

            </div>
        );
    }
}

export default SettingsView;
