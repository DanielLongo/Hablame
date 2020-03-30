import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Button, Row} from "antd";
import NumericInput from "../components/number_input";
import MicTest from "../components/mic_test";
import NewMic from "../components/new_mic";
import { Card } from 'antd';
import CustomFooter from "../components/custom_footer";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    color: "black",
    fontWeight : "bold"
};

const gridStyleComingSoon = {
    width: '25%',
        textAlign: 'center',
        color: "grey"
}

const cardStyle = {
    marginTop : "0%",
}
class AccentIntro extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.onClick = this.onClick.bind(this)
    }
    onClick(index) {
        console.log("index", index)
        this.props.introFinished(index)
    }

    render() {
        return (
            <div>
                <Header/>
                <p
                    style={{fontWeight:"bold", fontSize:20, marginTop:"1%"}}
                >
                    Pronunciation Practice
                </p>
                <div style={{fontSize:17}}>
                    <p>This activity using machine learning to evaluate pronunciation. Select an activity below.</p>
                </div>
                <Card style={cardStyle} title="Easy Words">
                    <a onClick={() => this.onClick(0)}><Card.Grid style={gridStyle}>Activity 1</Card.Grid></a>
                    <a><Card.Grid onClick={() => this.onClick(1)} style={gridStyle}>Activity 2</Card.Grid></a>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                </Card>
                <Card style={cardStyle} title="Medium Words">
                    <a><Card.Grid onClick={() => this.onClick(2)} style={gridStyle}>Activity 1</Card.Grid></a>
                    <a><Card.Grid onClick={() => this.onClick(3)}style={gridStyle}>Activity 2</Card.Grid></a>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                </Card>
                <Card  style={cardStyle} title="Difficult Words">
                    <a><Card.Grid onClick={() => this.onClick(4)}style={gridStyle}>Activity 1</Card.Grid></a>
                    <a><Card.Grid onClick={() => this.onClick(5)} style={gridStyle}>Activity 2</Card.Grid></a>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                    <Card.Grid style={gridStyleComingSoon}>Coming Soon</Card.Grid>
                </Card>
                {/*<CustomFooter/>*/}
            </div>
        )
    }
}

export default AccentIntro
