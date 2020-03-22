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
                        marginTop:"-1.5%"
                    }}
                >Live Speaking Coming Soon!</p>
            <div
                style={{display: "flex",
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%, 0)',
                    }}
            >
                <div>
                        <ActivityButton
                            text={"Interpersonal Speaking"} route={"conversation"}/>
                </div>
                <div style={{marginLeft:"4%"}}>
                        <ActivityButton
                            style={{width:"15%"}} text={"Presentational Speaking"} route={"presentation"} disabled={false}/>
                </div>
                <div style={{marginLeft:"4%"}}>
                    <ActivityButton
                        style={{width:"15%"}} text={"Live Speaking"} disabled={true}/>
                </div>
            </div>
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
