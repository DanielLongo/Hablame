import React, {Component} from 'react';
import 'antd/dist/antd.css';
import CustomFooter from "../components/custom_footer";
import MicRecorder from 'mic-recorder-to-mp3';
import Recorder from 'react-mp3-recorder'
import ring from "../components/ring.mp3";
import Sound from "react-sound";
import Mic from "../components/mic";
import { DownloadOutlined } from '@ant-design/icons';
import {ReactMic} from "react-mic";
import Header from "../components/header";
import {Button} from "antd";
const twenty = "https://www.dropbox.com/s/udjk2wv59akwaz3/20v2.mp3?raw=1";
const sixty = "https://www.dropbox.com/s/6on2inazleuvoq0/60.mp3?raw=1";
// const sixty = twenty;
const activities = [
    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/o7c8mg1h4y3j8ye/b.mp3?raw=1",
        "https://www.dropbox.com/s/0tp5mycimc5xqq8/c.mp3?raw=1", "https://www.dropbox.com/s/ls0mtzryyslo9jg/d.mp3?raw=1",
        "https://www.dropbox.com/s/lkq1qxxtaimf2wr/e.mp3?raw=1", "https://www.dropbox.com/s/wqfbv6o9vyvtago/f.mp3?raw=1",
         "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"
    ],
    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/gmypasnyj0d9kbi/b.mp3?raw=1",
        "https://www.dropbox.com/s/owavpdp7oh7wq8s/c.mp3?raw=1", "https://www.dropbox.com/s/x3qkyexk14vhr96/d.mp3?raw=1",
        "https://www.dropbox.com/s/dmlogri8czfkdrh/e.mp3?raw=1", "https://www.dropbox.com/s/1gmzoz3jxdm1t4u/f.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"
    ],
    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/24exmrlv0sdqqpm/b.mp3?raw=1",
        "https://www.dropbox.com/s/rca1h446tlty40t/c.mp3?raw=1", "https://www.dropbox.com/s/j3isu1kotg08jim/d.mp3?raw=1",
        "https://www.dropbox.com/s/qdtx418ad4ikyi5/e.mp3?raw=1", "https://www.dropbox.com/s/g7k89231poh0yop/f.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"
    ],
    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/r9x4dqe6czesf76/b.mp3?raw=1",
        "https://www.dropbox.com/s/rq837bjhwbuqm0t/c.mp3?raw=1", "https://www.dropbox.com/s/et08lxjodjwpxsy/d.mp3?raw=1",
        "https://www.dropbox.com/s/afvbxew2dkfr9zz/e.mp3?raw=1", "https://www.dropbox.com/s/9hd9dqk64f69tsy/f.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"
    ],
    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/hwslhf6nnapgj7w/b.mp3?raw=1",
        "https://www.dropbox.com/s/gnx26bmtav1gi2y/c.mp3?raw=1", "https://www.dropbox.com/s/z6e7c9hx6ithms6/d.mp3?raw=1",
        "https://www.dropbox.com/s/463aha6wy7pdg4z/e.mp3?raw=1", "https://www.dropbox.com/s/dh9mmo3lww3erts/f.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"],

    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/4ugrmj9f9clkfv4/b.mp3?raw=1",
        "https://www.dropbox.com/s/ty5iwi7kjnfj6vf/c.mp3?raw=1", "https://www.dropbox.com/s/vtqhtb0i79d6ymb/d.mp3?raw=1",
        "https://www.dropbox.com/s/xzwfnoe49eizqc8/e.mp3?raw=1", "https://www.dropbox.com/s/3i8t20fx44hjdbo/f.mp3?raw=1",
        "https://www.dropbox.com/s/5osk7w8niu91yhc/g0.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"],

    ["https://www.dropbox.com/s/dilzfwzzd3tmg7x/a.mp3?raw=1", "https://www.dropbox.com/s/kijusjct68pxh1t/b.mp3?raw=1",
        "https://www.dropbox.com/s/zucb94vhvtc9unx/c.mp3?raw=1", "https://www.dropbox.com/s/wjej1vl1ehg9y9d/d.mp3?raw=1",
        "https://www.dropbox.com/s/d5kblsw5w08y1hf/e.mp3?raw=1", "https://www.dropbox.com/s/654yu5yr0qpva2s/f.mp3?raw=1",
        "https://www.dropbox.com/s/brl47el70y1qgi6/g.mp3?raw=1"]


    
];
const prompts = [
    "./prompts/1-prompt.png",
    "./prompts/2-prompt.png",
    "./prompts/3-prompt.png",
    "./prompts/4-prompt.png",
    "./prompts/5-prompt.png",
    "./prompts/6-prompt.png",
    "./prompts/7-prompt.png",

]
const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class SpeakingActivity extends Component {
    constructor(props) {
        super(props);
        this.handleFinishedPlaying = this.handleFinishedPlaying.bind(this)
        this.onStop = this.onStop.bind(this)
    }
    state = {
        isRecording: false,
        isBlocked : false,
        micActive : false, // tells when to change mic color
        startRecording : false, // tells when to display the visual mic
        curActivityIndex : 0,
        curRecordingIndex : 0,
        twentyNext : false,
        sixtyNext : true,
        soundUrl : activities[0][0],
        showPrompt : false,
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
            soundUrl : activities[this.props.activityIndex][this.state.curRecordingIndex],
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
        console.log("finished playing A");
        console.log(this.state);
        console.log("finished playing B");
        if (this.state.curRecordingIndex === 0 && (this.state.sixtyNext === false)) {
            this.start()
            // alert("start")
            console.log("START RECORDING")
        }
        // if (this.state.curRecordingIndex === activities[this.state.curActivityIndex].length - 1 && (this.state.twentyNext === true)) {
        if (this.state.curRecordingIndex === 6 && (this.state.twentyNext === true)) {
            console.log("FINISHED ACTIVITY");
            // alert("done recording")
            this.stop();
            this.setState({
                startRecording : false,
                done : true,
                showPrompt : false
            })
        }
        else if (this.state.sixtyNext) {
            console.log("SIXTY NEXT");
            this.setState({
                soundUrl : sixty,
                sixtyNext : false,
                micActive : false,
                // curRecordingIndex : this.state.curRecordingIndex + 1,
                showPrompt : true,
                startRecording: false,
            })
        }
        else if (this.state.twentyNext) {
            console.log("TWENTY NEXT");
            this.setState({
                soundUrl : twenty,
                startRecording: true,
                twentyNext : false,
                micActive : true,
                showPrompt : true
            })
        }
        else  {
            console.log("OTHER NEXT");
            let curIndex = this.state.curRecordingIndex;
            this.setState({
                startRecording: true,
                soundUrl : activities[this.state.curActivityIndex][curIndex + 1],
                curRecordingIndex : this.state.curRecordingIndex + 1,
                micActive : false,
                twentyNext : true,
                showPrompt : true
            })
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
                />
                }
                <p
                    style={{fontSize:24, fontWeight:"bold", marginTop:"1%"}}
                >Interpersonal Speaking</p>
                <div>
                    <div>
                    {(this.state.micActive && (!this.state.done)) && <img style={{width:150}} src={"active-mic.png"}/>}
                    {(!this.state.micActive && (!this.state.done)) && <img style={{width:150}} src={"inactive-mic.png"}/>}
                    </div>
                    {this.state.showPrompt && <img src={prompts[this.state.curActivityIndex]}/>}
                </div>
                <div>
                    {this.state.startRecording && <ReactMic record={true} className="sound-wave" mimeType='audio/mp3' strokeColor="#ff5757" backgroundColor="#ffffff" />}
                </div>
                {this.state.done &&
                <div>
                    <Header/>
                    <p style={{fontSize:18}}>Your Recording</p>
                    <audio src={this.state.blobURL} controls="controls"/>
                    <div style={{marginTop:"1%", marginBottom:"1%"}}>
                        <a download={"converse_task_" + (this.state.curActivityIndex + 1)} href={this.state.blobURL}><Button shape="round" type={"danger"} icon={<DownloadOutlined/>}>Download Recording</Button></a>
                    </div>
                    <a href={"https://hablame.org/"}><p>Practice Another Activity</p></a>
                </div>}
                <CustomFooter/>
            </div>
        )
    }
}

export default SpeakingActivity
