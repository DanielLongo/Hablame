import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button} from "antd";
import {
    withRouter
} from 'react-router-dom'
class ActivityButton extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
    }

    handleButtonClicked () {
        this.props.history.push('/' + this.props.route)
    }
    render() {
        return (
            <div>
                <Button disabled={this.props.disabled} type={"secondary"}
                    style={{width:250, height:250, borderColor:"#fedd64", borderWidth:2}}
                        onClick={this.handleButtonClicked}
                ><p
                    style={{
                        fontSize:16,
                        fontWeight:"bold",
                        textAlign: 'center'
                    }}
                >{this.props.text}</p></Button>
            </div>
        )
    }
}

export default withRouter(ActivityButton)
