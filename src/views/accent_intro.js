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
};
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
                    <p>Select an activity below.</p>
                </div>
                <Card title="Easy Words">
                    <a onClick={() => this.onClick(0)}><Card.Grid style={gridStyle}>Activity 1</Card.Grid></a>
                    <Card.Grid style={gridStyle}>Activity 2</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 3</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 4</Card.Grid>
                </Card>
                <Card title="Medium Words">
                    <Card.Grid style={gridStyle}>Activity 1</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 2</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 3</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 4</Card.Grid>
                </Card>
                <Card title="Difficult Words">
                    <Card.Grid style={gridStyle}>Activity 1</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 2</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 3</Card.Grid>
                    <Card.Grid style={gridStyle}>Activity 4</Card.Grid>
                </Card>
                {/*<CustomFooter/>*/}
            </div>
        )
    }
}

export default AccentIntro
