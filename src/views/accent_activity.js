import React, {Component} from 'react';
import MicRecorder from "mic-recorder-to-mp3";
import {Button, Card} from "antd";
import { ReactMic } from 'react-mic';
import GradeAudio from "../components/grade_audio";
import Recorder from "../components/react-recording/Recorder";
import Header from "../components/header";
import Pdf from "react-to-pdf";
let words = [
    [ "añadir", "correr", "llamar", "trabajar", "azul", "manejar", "manzana", "difícil"],
    ["enseñar", "ciudad", "pregunta", "propósito", "siempre", "nunca", "nariz", "cuerpo"],
    ["sonrojado", "perro", "jamonero", "carro", "ahorrar", "propósito", "alquilar", "descubir"],
    ["triángulo", "desempeñar", "apoderarse", "aprovecharse", "pertenecer", "prórroga", "aburrido"],
    ["irrumpir", "ferrocarril", "establecer", "esbirro", "trastorno", "balbucear"],
    ["zurcir", "pingüino", "prórroga", "idiosincrasia", "ornitorrinco", "ahorar"]
]

const ref = React.createRef();

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class AccentActivity extends Component{
    constructor(props) {
        super(props);
        this.attempts = 0
        this.curWords = words[this.props.activityIndex];
        // alert(this.curWords)
        // alert(words[props.activityIndex])
        this.submitGrade = this.submitGrade.bind(this)
    }

    state = {
        index : 0,
        blobURL : '',
        finished_recording : false,
        record: false,
        pass : '-1'
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

    submitBlob = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        this.setState({
            blobURL : recordedBlob,
            finished_recording : true
        })
    }

    submitGrade = (grade) => {
        // 0 fail, 1 pass
        let newIndex = this.state.index + 1
        let wordsLength = this.curWords.length
        if (grade === 1) {
            console.log("words before", words)
            words = this.curWords.splice(this.state.index, 1)
            newIndex = newIndex - 1;
            console.log("words after", words)

        }

        if (this.curWords.length === 0) {
            this.setState({
                finished: true
            })
        }


        if (this.state.index === wordsLength -1){
            if (this.attempts === 3) {
                this.setState({
                    finished: true
                })
            }
            this.attempts += 1
            newIndex = 0
        }
        this.setState({
            pass : grade
        })
        console.log("new index ", newIndex)
        setTimeout(() => {
            this.setState({
                index : newIndex,
                finished_recording : false,
                pass : -1
            }
            )
        }, 300);

    }


    start = () => {
        if (this.state.isBlocked) {
            alert("Audio Permission Denied. Please Allow Microphone Access. The activity will not work without microphone access.")
            console.log('Permission Denied');
        }
    };

    render() {
        this.start()
        const id = Math.trunc(Date.now() * Math.random())
        return (
            <div>
                {/*<Header/>*/}
                <p style={{fontSize:20, fontWeight:"bold", marginTop:"2%"}}>Practice Pronunciation</p>
                <p style={{fontSize:18}}>Say the word shown on the card. Then Click Stop Recording</p>
                <p style={{fontSize:18}}>Attempts Remaining: {4 - this.attempts}</p>
            <div style={{ marginTop: "4%", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {!this.state.finished && <Card style={{width:400, height:300, marginTop:"-3%"}}>
                    <p style={{fontSize:50, fontWeight:"bold", marginTop:"4%", color:"red"}}>{capitalize(this.curWords[this.state.index])}</p>
                    <div>
                    {!this.state.finished_recording && <img style={{width:100}} src={"recording.gif"}/>}
                    <p></p>
                    {!this.state.finished_recording && <Recorder submitBlob={this.submitBlob}/>}
                    {this.state.finished_recording && <GradeAudio submitGrade={this.submitGrade} blobURL={this.state.blobURL} targetWord={this.curWords[this.state.index]}/>}
                    {this.state.pass === 1 && <img style={{width:180, marginTop:-75}} src={"check.png"}/>}
                    {this.state.pass === 0 && <img style={{width:180, marginTop:-75}} src={"x.png"}/>}
                    </div>
                </Card>}
                {this.state.finished  && <Card style={{width:500, height:500}}>
                    <div ref={ref}>
                        <p style={{fontSize:20, fontWeight:"bold", marginTop:"1%"}}>Activity {this.props.activityIndex + 1} Complete</p>
                        <p style={{fontSize:20, fontWeight:"bold", marginTop:"1%"}}>Unique ID {id}</p>
                    </div>
                    <img style={{width:150}} src={"Complete.png"}/>
                    <a style={{fontSize:16}} href={"https://hablame.org/"}>Practice Another Activity</a>
                    </Card>}
            </div>
            </div>

        )
    }
}

export default AccentActivity
