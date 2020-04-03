import React, {Component} from 'react';
import 'antd/dist/antd.css';
import "../App.css"

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{marginTop:"2%"}}>
                <a href={"/"}>
                    { this.props.isSpanish && <img
                    style={{width:300, position:"relative"}}
                    src="https://hablame.org/Hablame.png"/>}
                    { !this.props.isSpanish && <img
                        style={{width:300, position:"relative"}}
                        src={"french/parle.png"}/>
                    }
                {/*    <div className={"image-blurred-edge"}/>*/}
                </a>
            </div>
        )
    }
}

export default Header
