import React, {Component} from 'react';
import 'antd/dist/antd.css';
import CustomFooter from "../components/custom_footer";
import MicRecorder from 'mic-recorder-to-mp3';
import Recorder from 'react-mp3-recorder'
import ring from "../components/ring.mp3";
import Sound from "react-sound";
import Mic from "../components/mic";
import {ReactMic} from "react-mic";
import Header from "../components/header";
import {Button} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
const twenty = "https://www.dropbox.com/s/udjk2wv59akwaz3/20v2.mp3?raw=1";
const fourMins = "https://www.dropbox.com/s/4140z3h9ivne50g/fourv2.mp3?raw=1";
const start = "https://www.dropbox.com/s/8bfyw7wjdiqcslz/startv2.mp3?raw=1";
const twoMins = "https://www.dropbox.com/s/1va88hdki9kwi89/presentation-end.mp3?raw=1"
const clips = [
    fourMins,
    start,
    twoMins,
];
const prompts = [
    "./presentation_prompts/1.png",
    "./presentation_prompts/2.png",
    "./presentation_prompts/3.png",
    "./presentation_prompts/4.png"
]
const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class PresentingActivity extends Component {
    constructor(props) {
        super(props);
        this.handleFinishedPlaying = this.handleFinishedPlaying.bind(this)
        this.onStop = this.onStop.bind(this)
    }
    state = {
        curActivityIndex : 0,
        soundUrl : clips[0],
        isRecording: false,
        isBlocked : false,
        micActive : false, // tells when to change mic color
        startRecording : false, // tells when to display the visual mic
        curRecordingIndex : 0,
        showPrompt : true,
        done: false,
        downloadLinkUrl : '',
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        console.log(recordedBlob.blobURL)
        this.setState({
            downloadLinkURL: recordedBlob.blobURL
        })
    }

    onData(recordedBlob) {
        // console.log('current recordedBlob is: ', recordedBlob);
        // console.log(recordedBlob.blobURL)
        // this.setState({
        //     downloadLinkURL: recordedBlob.blobURL
        // })
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
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    componentDidMount() {
        this.setState({
            curActivityIndex : this.props.activityIndex
        });
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

    handleFinishedPlaying() {
        console.log("FINISHED PLAYING")
       if (this.state.curRecordingIndex === 0) {
           // just finished prep 4 mins
           this.setState({
               curRecordingIndex : 1,
               soundUrl : clips[1],
           })
       }

       else if (this.state.curRecordingIndex === 1) {
           // just finished intro
           this.start()
           this.setState({
               curRecordingIndex : 2,
               soundUrl : clips[2],
               isRecording: true,
               micActive : true,
               startRecording : true,
           })
       }

       else if (this.state.curRecordingIndex === 2) {
           // finished activity
           this.stop()
           this.setState({
               micActive : false,
               showPrompt : false,
               done: true,
           })
       }

       else {
           alert("An error occurred")
       }


}


    render() {
        console.log(this.state)
        return (
            <div>
                {(!this.state.done) &&
                <Sound
                    url={this.state.soundUrl}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.handleFinishedPlaying}
                />}

                <p style={{fontSize:24, fontWeight:"bold", marginTop:"1%"}}>Presentational Speaking</p>
                <div>
                    <div>
                        {(this.state.micActive && (!this.state.done)) && <img style={{width:150}} src={"active-mic.png"}/>}
                        {(!this.state.micActive && (!this.state.done)) && <img style={{width:150}} src={"inactive-mic.png"}/>}
                    </div>
                    {this.state.showPrompt && <img src={prompts[this.state.curActivityIndex]}/>}
                </div>
                <div>
                    {(this.state.startRecording && (!this.state.done)) && <ReactMic record={true} className="sound-wave" mimeType='audio/mp3' strokeColor="#ff5757" backgroundColor="#ffffff" />}
                </div>
                {this.state.done &&
                <div>
                    <Header/>
                    <p style={{fontSize:18}}>Your Recording</p>
                    <audio src={this.state.blobURL} controls="controls"/>
                    <div style={{marginTop:"1%", marginBottom:"1%"}}>
                        <a download={"present_task_" + (this.state.curActivityIndex + 1)} href={this.state.blobURL}><Button shape="round" type={"danger"} icon={<DownloadOutlined/>}>Download Recording</Button></a>
                    </div>
                    <a href={"https://hablame.org/"}><p>Practice Another Activity</p></a>
                </div>}
                <CustomFooter/>
            </div>
        )
    }
}

export default PresentingActivity
