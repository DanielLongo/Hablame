import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Input, Row, Button} from 'antd'
import NumericInput from "../components/number_input";
import CustomFooter from "../components/custom_footer";
import ConversationIntro from "../views/conversation_intro";
import Countdown from "../views/countdown";
import SpeakingActivity from "../views/speaking_activity";
class PraticeConversation extends Component {
    constructor(props) {
        super(props);
        this.showActivity = this.showActivity.bind(this)
        this.showCountdown = this.showCountdown.bind(this)
    }

    state = {
        showIntro : true,
        showCountdown : false,
        showActivity :false
    };

    showCountdown() {
        this.setState({
            showIntro : false,
            showCountdown : true,
            showActivity : false
        })
    }

    showActivity() {
        this.setState({
            showIntro : false,
            showCountdown : false,
            showActivity :true
        })
    }

    render() {
        return (
            <div>
                {this.state.showIntro && <ConversationIntro handleDone={this.showCountdown}/>}
                {this.state.showCountdown && <Countdown handleDone={this.showActivity}/>}
                {this.state.showActivity && <SpeakingActivity/>}
                <CustomFooter/>
            </div>
        )
    }
}

export default PraticeConversation
