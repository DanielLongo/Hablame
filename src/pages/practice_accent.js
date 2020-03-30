import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Input, Row, Button, Alert} from 'antd'
import CustomFooter from "../components/custom_footer";
import ReactGA from "react-ga";
import AccentIntro from "../views/accent_intro";
import AccentActivity from "../views/accent_activity";
import Recorder from "../components/react-recording/Recorder";
import Countdown from "../views/countdown";
const { detect } = require('detect-browser');
const browser = detect();

function initializeReactGA() {
    ReactGA.initialize('UA-115296983-2');
    ReactGA.pageview('/accent');
}
initializeReactGA()
class PraticeAccent extends Component {
    constructor(props) {
        super(props);
        this.showActivity = this.showActivity.bind(this)
        this.introFinished = this.introFinished.bind(this)
    }

    componentDidMount() {
        document.title = "Hablame - Pronunciation"
        this.setState({
            activityIndex : Math.trunc(Math.random() * (4))
        })
    }

    state = {
        showIntro : true,
        showActivity : false,
        showCountdown : false,
        activityIndex : 0 // 4 because there are currently 4 recordings
    };

    showCountdown() {
        this.setState({
            showIntro : false,
            showInstructions : false,
            showCountdown : true,
            showActivity : false
        })
    }

    showActivity() {
        this.setState({
            showActivity : true,
            showIntro : false,
            showCountdown : false
        })
    }

    updateActivityIndex(newIndex) {
        this.setState({
            activityIndex : newIndex
        })
    }

    introFinished(activityIndex) {
        console.log("INtRO FINISHED")
        this.updateActivityIndex(activityIndex)
        // this.showActivity()
        this.showCountdown()
    }

    render() {
        if (browser.name === "safari") {
            this.alert = (<Alert
                message="Browser Error"
                description="Safari is not supported. Please use a different web browser."
                type="error"
                showIcon
            />)
        }
        return (
            <div>
                {this.alert}
                {this.state.showIntro && <AccentIntro introFinished={this.introFinished}/>}
                {this.state.showCountdown && <Countdown activityIndex={this.state.activityIndex} handleDone={this.showActivity}/>}
                {this.state.showActivity && <AccentActivity activityIndex={this.state.activityIndex}/>}
                <CustomFooter/>
            </div>
        )
    }
}

export default PraticeAccent
