import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Button, Row} from "antd";
import NumericInput from "../components/number_input";
import MicTest from "../components/mic_test";
import NewMic from "../components/new_mic";
class PresentationIntro extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.onClick = this.onClick.bind(this)
        // this.onChange = this.onChange.bind(this)
    }

    onChange = value => {
        this.setState({ value });
        if (value <= 5 && value > 0) {
            this.props.updateActivityIndex(Math.trunc(value) - 1) // -1 because index at
        }
    };

    onClick() {
        if (this.state.value > 5 || this.state.value < 1) {
            alert("Given prompt code invalid. Starting Random Activity.")
        }
        this.props.handleDone()
    }

    render() {
        return (
            <div>
                <Header/>
                <p
                    style={{fontWeight:"bold", fontSize:20, marginTop:"1%"}}
                >
                    Presentational Speaking
                </p>
                <div style={{fontSize:17}}>
                    <p>If you have a prompt code enter it now. Otherwise, the section will be randomly selected.</p>
                </div>
                <div
                    style={{textAlign:"center", marginLeft:"38%"}}
                >
                    <Row>
                        <p style={{marginRight:"1%", marginTop:12, fontSize:16, fontWeight:'regular'}}
                        >Prompt Code (Optional):</p>   <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
                    </Row>
                </div>
                <MicTest/>
                <Button shape="round" type={"danger"} style={{marginTop:"1%", width:100}} onClick={this.onClick}><p style={{fontSize:16}}>Start</p></Button>
            </div>
        )
    }
}

export default PresentationIntro
