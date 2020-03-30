import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PraticeConversation from "./pages/pratice_conversation";
import PraticePresentation from "./pages/practice_presentation";
import ReactGA from 'react-ga';
import PraticeAccent from "./pages/practice_accent";
function initializeReactGA() {
    ReactGA.initialize('UA-115296983-2');
    ReactGA.pageview('/');
}
initializeReactGA()
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/conversation">
                    <PraticeConversation />
                </Route>
                <Route path="/presentation">
                    <PraticePresentation />
                </Route>
                <Route path="/accent">
                    <PraticeAccent />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
