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
        this.props.history.push('/conversation')
    }
    render() {
        return (
            <div>
                <Button disabled={this.props.disabled} type={"secondary"}
                    style={{width:200, height:200}}
                        onClick={this.handleButtonClicked}
                ><p
                    style={{
                        fontSize:16,
                        fontWeight:"bold"
                    }}
                >{this.props.text}</p></Button>
            </div>
        )
    }
}

export default withRouter(ActivityButton)
