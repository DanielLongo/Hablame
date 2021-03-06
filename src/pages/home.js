import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import ActivityButton from "../components/activity_button";
import {Row, Col, Alert} from 'antd'
import '../App.css';
import CustomFooter from "../components/custom_footer";
const { detect } = require('detect-browser');
const browser = detect();

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.title = "Hablame"
    }
    render() {
        if (browser.name === "safari") {
            alert("Safari is not supported. Please use a different web browser (Chrome, FireFox, Edge).")
            this.alert = (<Alert
                message="Browser Error"
                description="Safari is not supported. Please use a different web browser."
                type="error"
                showIcon
            />)
        }
        return (
            <div style={{}}>
            <div className={"background"}/>
                {this.alert}
            <div>
                <div>
<div style={{marginBottom:"-2%"}}>
                    <Header  isSpanish={this.props.isSpanish}/>
                </div>
                    <div style={{position:"relative", marginTop:"2%"}}>
               <p
                   style={{
                       fontWeight:"bold",
                       fontSize:25,
                   }}
               >Select Activity</p>
                <p
                    style={{
                        marginTop:"-1.5%",
                        position: 'absolute', left: '50%',
                        transform: 'translate(-50%, 0)',
                        fontSize : 15,
                        width : "100%"


                    }}
                >Hover cursor over cards to view activity description. Interpersonal and presentational speaking exercises <strong> allow <br/> students to download their audio recordings so that they may save them or submit them to teachers. </strong></p>
                        <p><a style={{fontSize:15}} href={"/teachers"}><br/>Information for Teachers</a> and <a href={"https://youtu.be/w3t7BBBz1JQ"}>5 Minute Teacher Overview Video</a></p>
                    </div>
            <div
                style={{display: "flex",
                    position: 'absolute', left: '46.5%',
                    transform: 'translate(-50%, 0)',
                    marginTop : 32
                    }}
            >
                <div>
                        <ActivityButton
                            text={"Interpersonal Speaking"} route={"conversation"} isSpanish={this.props.isSpanish} borderColor={"#fedd64"}/>
                </div>
                <div style={{marginLeft:"4%", marginRight:"4%"}}>
                        <ActivityButton
                            style={{width:"15%"}} text={"Presentational Speaking"} route={"presentation"} disabled={false} isSpanish={this.props.isSpanish} borderColor={"#fedd64"}/>
                    <p style={{fontSize:2}}><br/></p>
                </div>
                <div style={{marginRight:"4%"}}>
                    {this.props.isSpanish &&
                    <ActivityButton
                        style={{width:"15%"}} text={"Reading Practice"} route={"reading"} disabled={!this.props.isSpanish} isSpanish={this.props.isSpanish} borderColor={"#ff5757"}/>
                    }
                </div>
                <div>
                    {this.props.isSpanish &&
                    <ActivityButton
                        style={{width:"15%"}} text={"Pronunciation Practice"} route={"accent"} disabled={!this.props.isSpanish} isSpanish={this.props.isSpanish} borderColor={"#fedd64"}/>
                    }
                </div>
            </div>
            </div>
                <div>
                    <CustomFooter/>
                </div>
            </div>
            </div>
        )
    }
}

export default Home
