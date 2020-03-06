import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import QuestView from './view_quests/QuestView.js';
import MapView from './view_map/MapView';


function App() {
    // constructor(props){}
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/map" component={MapView}/>
                    <Route path="/" component={QuestView}/>
                </Switch>
            </Router>
            {/*    <Route path="/view_quests/QuestView.js">*/}
            {/*        <QuestView class="standardView" />*/}
            {/*    </Route>*/}
            {/*<QuestView class="standardView"/>*/}

        </div>
    );
}

export default App;
