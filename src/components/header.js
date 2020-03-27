import React, {Component} from 'react';
import 'antd/dist/antd.css';
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div>
                <a href={"/"}>
                <img
                    style={{width:300, position:"relative"}}
                    src="Hablame.png"/>
                {/*    <div className={"image-blurred-edge"}/>*/}
                </a>
            </div>
        )
    }
}

export default Header
