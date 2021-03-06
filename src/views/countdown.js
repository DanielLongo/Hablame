import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import beepSound from './my-beep.mp3';
import Sound from 'react-sound'
import {Alert} from "antd";

const styles = {
    textAlign: "center"
};

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
    }

    handleSongFinishedPlaying() {
        console.log("DONE")
        this.props.handleDone()
    }

    render() {
        return (
            <div>
            <Alert type="success"  message={"Starting Activity " + (this.props.activityIndex + 1)}/>
            <div style={styles}>
                <img src={"countdown.gif"}/>
                <Sound
                    url={beepSound}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
            </div>
            </div>

        );
    }
}

export default Countdown
