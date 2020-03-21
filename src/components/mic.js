import { ReactMic } from 'react-mic';
import React, {Component} from 'react';

class Mic extends Component {
    constructor(props) {
        super(props);
        console.log("MIC RECORD SETTING " + this.props.record)
    }
    state = {
        record: this.props.record
    };

    startRecording = () => {
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        this.setState({
            record: false
        });
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#ff5757"
                    backgroundColor="#ffffff" />
            </div>
        );
    }
}

export default Mic
