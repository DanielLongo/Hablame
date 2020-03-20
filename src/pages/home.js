import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from "../components/header";
import ActivityButton from "../components/activity_button";
import {Row, Col} from 'antd'
import CustomFooter from "../components/custom_footer";

class Home extends Component {
    render() {
        return (
            <div>
            <div>
               <Header/>
               <p
                   style={{
                       fontWeight:"bold",
                       fontSize:25
                   }}
               >Select Activity</p>
                <p
                    style={{
                        marginTop:"-1%"
                    }}
                >Presenting Practice Coming Soon!</p>
                <Row
                    style={{
                        marginTop:"1%"
                    }}
                >
                    <Col span={8}/>
                    <Col span={3}
                    >
                    <ActivityButton
                        text={"Practice Conversation"}/>
                    </Col>
                    <Col span={2}/>
                    <Col span={3}
                    >
                    <ActivityButton
                        text={"Practice Presenting"} disabled={true}/>
                    </Col>
                </Row>
            </div>
                <div
                >
                    <CustomFooter/>
                </div>
            </div>
        )
    }
}

export default Home
