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
    componentDidMount() {
        document.title = "Hablame"
    }
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
            <div style={{overflow:"hidden"}}>
            <div className={"background"}/>
                {this.alert}
            <div>
                <div>
<div style={{marginTop:"2%", marginBottom:"-2%"}}>
                    <Header/>
                </div>
               <p
                   style={{
                       fontWeight:"bold",
                       fontSize:25
                   }}
               >Select Activity</p>
                <p
                    style={{
                        marginTop:"-1.5%"
                    }}
                >Live Speaking Coming Soon!</p>
            <div
                style={{display: "flex",
                    position: 'absolute', left: '48%',
                    transform: 'translate(-50%, 0)',
                    }}
            >
                <div>
                        <ActivityButton
                            text={"Interpersonal Speaking"} route={"conversation"}/>
                </div>
                <div style={{marginLeft:"4%", marginRight:"4%"}}>
                        <ActivityButton
                            style={{width:"15%"}} text={"Presentational Speaking"} route={"presentation"} disabled={false}/>
                </div>
                <div>
                    <ActivityButton
                        style={{width:"15%"}} text={"Live Speaking"} route={"live"} disabled={true}/>
                </div>
            </div>
            </div>
                <div
                >
                    <CustomFooter/>
                </div>
            </div>
            </div>
        )
    }
}

export default Home
