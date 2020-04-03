import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Input, Row, Button, Alert} from 'antd'
import NumericInput from "../components/number_input";
import CustomFooter from "../components/custom_footer";
import ConversationIntro from "../views/conversation_intro";
import Countdown from "../views/countdown";
import SpeakingActivity from "../views/speaking_activity";
import ReactGA from "react-ga";
const { detect } = require('detect-browser');
const browser = detect();

function initializeReactGA() {
    ReactGA.initialize('UA-115296983-2');
    ReactGA.pageview('/conversation');
}
initializeReactGA()
class PraticeConversation extends Component {
    constructor(props) {
        super(props);
        this.showActivity = this.showActivity.bind(this)
        this.showCountdown = this.showCountdown.bind(this)
        this.updateActivityIndex = this.updateActivityIndex.bind(this)
    }

    componentDidMount() {
        document.title = "Hablame - Conversation"
        this.setState({
            activityIndex : Math.trunc(Math.random() * (7))
        })
    }

    state = {
        showIntro : true,
        showCountdown : false,
        showActivity :false,
        activityIndex : 0 // 4 because there are currently 4 recordings
    };

    showCountdown() {
        this.setState({
            showCountdown : true,
            showIntro : false,
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
                {this.state.showIntro && <ConversationIntro handleDone={this.showCountdown} updateActivityIndex={this.updateActivityIndex} isSpanish={this.props.isSpanish}/>}
                {this.state.showCountdown && <Countdown handleDone={this.showActivity} activityIndex={this.state.activityIndex}/>}
                {this.state.showActivity && <SpeakingActivity activityIndex={this.state.activityIndex} isSpanish={this.props.isSpanish}/>}
                <CustomFooter/>
            </div>
        )
    }
}

export default PraticeConversation
