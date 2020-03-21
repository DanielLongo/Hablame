import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd'
import Header from "../components/header";
class PresentationInstructions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <p
                    style={{fontWeight:"bold", fontSize:20, marginTop:"1%"}}>
                    Presentational Speaking
                </p>
                <div>
                <img
                    src="presentation_instructions.png"/>
                </div>
                <Button type={"danger"} onClick={this.props.handleDone}>Begin Task</Button>
            </div>

        )
    }
}

export default PresentationInstructions
