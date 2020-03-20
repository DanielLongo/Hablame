import React, {Component} from 'react';
import 'antd/dist/antd.css';
class Header extends Component {
    render() {
        return (
            <div>
                <a href={"/"}>
                <img
                    style={{width:300}}
                    src="logo.png"/>
                </a>
            </div>
        )
    }
}

export default Header
