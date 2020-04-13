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
import SettingsView from "./view_quests/SettingsView";
import NewQuestView from "./view_quests/NewQuestView";

function App() {
    // constructor(props){}
    var storage = window.localStorage;
    alert(window.localStorage.key(0));
    return (
        <div>
            <Router>
                <NavigationView/>
                <Switch>
                    <Route path="/map" component={MapView}/>
                    <Route path="/shop" component={ShopView}/>
                    <Route path="/settings" component={SettingsView}/>
                    <Route
                        path="/newQuest"
                        render={(props) => <NewQuestView storage={storage}/>}
                    />
                    <Route path="/" component={QuestView}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
