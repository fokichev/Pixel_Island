import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import NavigationView from "./NavigationView";
import QuestView from './view_quests/QuestView.js';
import MapView from './view_map/MapView';
import ShopView from "./view_shop/ShopView";

function App() {
    // constructor(props){}
    return (
        <div>
            <Router>
                <NavigationView/>
                <Switch>
                    <Route path="/map" component={MapView}/>
                    <Route path="/shop" component={ShopView}/>
                    <Route path="/" component={QuestView}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
