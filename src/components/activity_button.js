import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button} from "antd";
import ReactGA from 'react-ga';
import {
    withRouter
} from 'react-router-dom'
import "./activity_button.css"

const pictures = {
    "presentation" : "present.png",
    "conversation" : "converse.png",
    "accent" : "live.png"
}
class ActivityButton extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
    }

    handleButtonClicked () {
        ReactGA.event({
            category: 'User',
            action: 'started ' + this.props.route
        });
        this.props.history.push('/' + this.props.route)
    }
    render() {
        return (
            <div>
                <Button class="one" disabled={this.props.disabled} type={"secondary"}
                        style={{width:250, height:250, borderColor:"#fedd64", borderWidth:2, backgroundColor:"light-grey"}}
                        onClick={this.handleButtonClicked}
                ><p
                    style={{
                        fontSize:18,
                        fontWeight:"bold",
                        textAlign: 'center',
                    }}
                >{this.props.text}</p>
                    <img style={{width:120}} src={pictures[this.props.route]}/>
                </Button>
            </div>
        )
    }
}

export default withRouter(ActivityButton)
