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
    if(storage.getItem("questsArray") === null){
        storage.setItem("questsArray", "");
        //alert("1st time");
        //tutorial
    }
    else{
        //welcome back
        //alert("back");
    }
    return (
        <div>
            <Router>
                <NavigationView/>
                <Switch>
                    <Route
                        path="/map"
                        render={(props) => <MapView storage={storage}/>}
                    />
                    <Route
                        path="/shop"
                        render={(props) => <ShopView storage={storage}/>}
                    />
                    <Route
                        path="/settings"
                        render={(props) => <SettingsView storage={storage}/>}
                    />
                    <Route
                        path="/newQuest"
                        render={(props) => <NewQuestView storage={storage}/>}
                    />
                    <Route
                        path="/"
                        render={(props) => <QuestView storage={storage}/>}
                    />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
