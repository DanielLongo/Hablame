import React, {Component} from 'react';
import 'antd/dist/antd.css';
import ConversationIntro from "../views/conversation_intro";
import Countdown from "../views/countdown";
import SpeakingActivity from "../views/speaking_activity";
import CustomFooter from "../components/custom_footer";
import PresentationIntro from "../views/presentation_intro";
import PresentationInstructions from "../views/presentation_instructions";
import PresentingActivity from "../views/presenting_activity";
class PraticePresentation extends Component {
    constructor(props) {
        super(props);
        this.showActivity = this.showActivity.bind(this)
        this.showCountdown = this.showCountdown.bind(this)
        this.updateActivityIndex = this.updateActivityIndex.bind(this)
        this.showInstructions = this.showInstructions.bind(this)
    }

    state = {
        showIntro : true,
        showInstructions : false,
        showCountdown : false,
        showActivity :false,
        activityIndex : Math.trunc(Math.random() * (4)) // 4 because there are currently 4 recordings
    };

    showInstructions() {
        this.setState({
            showIntro : false,
            showInstructions : true,
            showCountdown : false,
            showActivity : false
        })
    }

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
            showIntro : false,
            showInstructions : false,
            showCountdown : false,
            showActivity : true
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
                {this.state.showIntro && <PresentationIntro handleDone={this.showInstructions} updateActivityIndex={this.updateActivityIndex}/>}
                {this.state.showInstructions && <PresentationInstructions handleDone={this.showCountdown}/>}
                {this.state.showCountdown && <Countdown handleDone={this.showActivity} activityIndex={this.state.activityIndex}/>}
                {this.state.showActivity && <PresentingActivity activityIndex={this.state.activityIndex}/>}
                <CustomFooter/>
            </div>
        )
    }

}

export default PraticePresentation
