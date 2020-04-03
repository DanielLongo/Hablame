import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Input, Row, Button, Alert} from 'antd'
import CustomFooter from "../components/custom_footer";
import ReactGA from "react-ga";
import AccentIntro from "../views/accent_intro";
import AccentActivity from "../views/accent_activity";
import Recorder from "../components/react-recording/Recorder";
import Countdown from "../views/countdown";
const { detect } = require('detect-browser');
const browser = detect();

function initializeReactGA() {
    ReactGA.initialize('UA-115296983-2');
    ReactGA.pageview('/teachers');
}
initializeReactGA()
class InformationForTeachers extends Component {

    render() {
        if (browser.name === "safari") {
            this.alert = (<Alert
                message="Browser Error"
                description="Safari is not supported. Please use a different web browser."
                type="error"
                showIcon
            />)
        }
        return (
            <div>
                <Header/>
                <a style={{fontSize:15}} href={"/"}>Back to Activities Page</a>
                <p style={{fontSize:22, fontWeight:"bold"}}>Information for Teachers</p>
                <p>If you would like to add your own prompts please email daniel@hablame.org.</p>
                <p style={{fontSize:18, fontWeight:"bold"}}>Prompt Codes</p>
                <Row style={{display: "flex",
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%, 0)',
                }}>
                <div  style={{marginRight:20}}>
                    <p>Interpersonal Speaking:</p>
                        <p>Prompt Code = 1 (2018 FRQ)</p>
                        <p>Prompt Code = 2 (2017 FRQ)</p>
                        <p>Prompt Code = 3 (2016 FRQ)</p>
                        <p>Prompt Code = 4 (2015 FRQ)</p>
                        <p>Prompt Code = 5 (2014 FRQ)</p>
                        <p>Prompt Code = 6 (2013 FRQ)</p>
                        <p>Prompt Code = 7 (2012 FRQ)</p>
                </div>
                    <div style={{marginLeft:20}}>
                    <p>Presentational Speaking:</p>
                        <p>Prompt Code = 1 (2018 FRQ)</p>
                        <p>Prompt Code = 2 (2017 FRQ)</p>
                        <p>Prompt Code = 3 (2016 FRQ)</p>
                        <p>Prompt Code = 4 (2015 FRQ)</p>
                        <p>Prompt Code = 5 (2014 FRQ)</p>
                    </div>
                </Row>

                <CustomFooter/>
            </div>
        )
    }
}

export default InformationForTeachers
