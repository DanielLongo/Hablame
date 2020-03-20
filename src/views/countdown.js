import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import beepSound from './my-beep.mp3';
import Sound from 'react-sound'

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
            <div style={styles}>
                <img src={"countdown.gif"}/>
                <Sound
                    url={beepSound}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
            </div>

        );
    }
}

export default Countdown
