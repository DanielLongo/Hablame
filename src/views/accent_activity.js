import React, {Component} from 'react';
import MicRecorder from "mic-recorder-to-mp3";
import {Button} from "antd";
import { ReactMic } from 'react-mic';
import GradeAudio from "../components/grade_audio";
import Recorder from "../components/react-recording/Recorder";
const words = [
    ["hablar", "hotel", "piano", "agua"]
]

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class AccentActivity extends Component{
    constructor(props) {
        super(props);
        this.curWords = words[this.props.activityIndex]
    }

    state = {
        index : 0,
        blobURL : '',
        finished_recording : false,
        record: false
    };

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }

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

    onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        this.setState({
            blobURL : recordedBlob.blobURL,
            finished_recording : true
        })
    }

    submitBlob = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        this.setState({
            blobURL : recordedBlob,
            finished_recording : true
        })
    }

    start = () => {
        if (this.state.isBlocked) {
            alert("Audio Permission Denied. Please Allow Microphone Access. The activity will not work without microphone access.")
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL: blobURL, finished_recording : true});
            }).catch((e) => console.log(e));
    };

    render() {
        return (
            <div>
                <p>{this.curWords[this.state.index]}</p>
                {/*<Button onClick={this.start}>Start</Button>*/}
                {/*<Button onClick={this.stop}>Stop</Button>*/}
                <Recorder submitBlob={this.submitBlob}/>
                {/*<div>*/}
                {/*    <ReactMic*/}
                {/*        record={this.state.record}*/}
                {/*        className="sound-wave"*/}
                {/*        onStop={this.onStop}*/}
                {/*        onData={this.onData}*/}
                {/*        strokeColor="#000000"*/}
                {/*        backgroundColor="#FF4081" />*/}
                {/*    <button onClick={this.startRecording} type="button">Start</button>*/}
                {/*    <button onClick={this.stopRecording} type="button">Stop</button>*/}
                {/*</div>*/}

                {this.state.finished_recording && <GradeAudio blobURL={this.state.blobURL}/>}


            </div>

        )
    }
}

export default AccentActivity
