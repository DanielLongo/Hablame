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
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import CustomFooter from "./components/custom_footer";

function initializeReactGA() {
    ReactGA.initialize('UA-115296983-2');
    ReactGA.pageview('/');
}
initializeReactGA()
function App() {
      return (
        <div className="App">
            <BrowserView>
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
            </BrowserView>
            <MobileView>
                <img src={"logo.png"} style={{width:200, marginTop:"1%"}}/>
                <p style={{marginTop: "4%", fontSize:17, marginLeft:"2%", marginRight:"2%"}}
                >Unfortunately, Hablame.org is not available on mobile devices. <strong>Please visit our website from a computer.</strong> For help please email support@hablame.org</p>
                <p style={{marginTop: "10%", fontSize:23, marginLeft:"2%", marginRight:"2%", fontWeight:"bold"}}>What is Hablame?</p>
                <p style={{marginTop: "0%", fontSize:17, marginLeft:"2%", marginRight:"2%"}}>Hablame.org is a free website dedicated to Spanish speaking practice. The site offers activities modeled after the AP Spanish exam including interpersonal and presentational speaking practice. The site also allows for students/learners to download their audio recordings so that they may save them or submit them to teachers. </p>
                <CustomFooter/>
            </MobileView>
        </div>
  );
}

export default App;
