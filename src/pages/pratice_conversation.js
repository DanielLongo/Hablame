import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Input, Row, Button} from 'antd'
import NumericInput from "../components/number_input";
import CustomFooter from "../components/custom_footer";
import ConversationIntro from "../views/conversation_intro";
import Countdown from "../views/countdown";
import SpeakingActivity from "../views/speaking_activity";
import ReactGA from "react-ga";
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
            activityIndex : Math.trunc(Math.random() * (4))
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
        return (
            <div>
                {this.state.showIntro && <ConversationIntro handleDone={this.showCountdown} updateActivityIndex={this.updateActivityIndex}/>}
                {this.state.showCountdown && <Countdown handleDone={this.showActivity} activityIndex={this.state.activityIndex}/>}
                {this.state.showActivity && <SpeakingActivity activityIndex={this.state.activityIndex}/>}
                <CustomFooter/>
            </div>
        )
    }
}

export default PraticeConversation
