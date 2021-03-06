import React, {Component} from 'react';
import 'antd/dist/antd.css';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}


class CustomFooter extends Component {
    render() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    <p
                        style={{marginTop:"-.5%"}}
                    > <a href={"https://hablame.org/"}>Hablame.org - Spanish</a> & <a href={"https://parlefrancais.org/"}>Parlefrancais.org - French</a> | <a href={"privacy.html"}>Privacy Policy</a></p>
                    <p style={{marginTop:"-.8%"}}
                    />
                    <p> Please contact daniel@hablame.org | Created by Daniel Longo 2020</p>
                </div>
            </div>
        )
    }
}

export default CustomFooter
