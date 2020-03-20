import { ReactMic } from 'react-mic';
import React, {Component} from 'react';
import {Button} from "antd";
import ring from './ring.mp3';
import Sound from 'react-sound'


export class MicTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            playRing : false
        }
        this.onClick = this.onClick.bind(this)
        this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
        this.ringPlayback = (<Sound
            url={ring}
            playStatus={Sound.status.PLAYING}
            onFinishedPlaying={this.handleSongFinishedPlaying}
        />)

    }
    handleSongFinishedPlaying() {
        this.setState({
            playRing : false
        })
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

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

    onClick() {
        this.startRecording()
        this.setState({
            playRing : true
        })
    }

    render() {
        return (
            <div>
                {this.state.playRing && this.ringPlayback}
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#ffffff" />
            </div>
                <div>
                    <Button onClick={this.onClick}>Test Audio and Mic</Button>
                </div>
            </div>

        );
    }
}

 export default MicTest
