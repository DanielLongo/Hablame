import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import {Button, Row} from "antd";
import NumericInput from "../components/number_input";
import MicTest from "../components/mic_test";
class ConversationIntro extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.onClick = this.onClick.bind(this)
    }

    onChange = value => {
        this.setState({ value });
    };

    onClick() {
        this.props.handleDone()
    }

    render() {
        return (
            <div>
                <p
                    style={{fontWeight:"bold", fontSize:20, marginTop:"4%"}}
                >
                    Free Response Conversation
                </p>
                <div style={{fontSize:17}}>
                    <p>If you have a prompt code enter it now. Otherwise, the section will be randomly selected.</p>
                    <p>Warning: The activity will start immediately after clicking start</p>
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
                <Button type={"danger"} style={{marginTop:"2%", width:100}} onClick={this.onClick}><p style={{fontSize:16}}>Start</p></Button>
            </div>
        )
    }
}

export default ConversationIntro
