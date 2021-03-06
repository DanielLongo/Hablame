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
    "accent" : "live.png",
    "reading" : "reading.png"
}

const descriptions =  {
    "conversation" : "A recorded three minute conversation modeled after the AP exam interpersonal speaking section. Users are asked questions and respond in a conversation which is downloadable as an mp3.",
    "presentation" : "A recorded two minute presentation with a prompt modeled after the AP exam presentational speaking section. Users may download their presentation as an mp3 after the activity finishes.",
    "accent" : "Users read words from curated sets aloud and Hablame evaluates their pronunciation using machine learning algorithms.",
    "reading" : "Make any Spanish article an assignment with vocabulary builder, reading comprehension, and discussion components."
}
class ActivityButton extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
    }

    handleButtonClicked () {
        if (this.props.isSpanish) {
            ReactGA.event({
                category: 'User',
                action: 'started ' + this.props.route + ' Spanish'
            });
        }
        else {
            ReactGA.event({
                category: 'User',
                action: 'started ' + this.props.route + ' French'
            });
        }
        if (this.props.route === "reading") {
            window.location.assign('https://textassign.org/')
        }
        else {
            this.props.history.push('/' + this.props.route)
        }
    }
// <Button class="one" disabled={this.props.disabled} type={"secondary"}
// style={{width:250, height:250, borderColor:"#fedd64", borderWidth:2, backgroundColor:"light-grey"}}
// onClick={this.handleButtonClicked}
// ><p
// style={{
//     fontSize:18,
//     fontWeight:"bold",
//     textAlign: 'center',
// }}
// >{this.props.text}</p>
// <img style={{width:120}} src={pictures[this.props.route]}/>
// </Button>
//     #002654 french
//    #fedd64 spanish

    render() {
        console.log("this.props.spanish", this.props)
        return (
            <div onClick={this.handleButtonClicked}>
                <a>
                <div className="flip-card" style={{borderColor:this.props.borderColor}}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            { this.props.isSpanish && <div class="one" disabled={this.props.disabled}
                            style={{width:246, height:230, borderColor:this.props.borderColor, borderWidth:2, backgroundColor:"white"}}
                            onClick={this.handleButtonClicked}
                            ><p
                                style={{
                                    marginTop: 14,
                                    fontSize:18,
                                    fontWeight:"bold",
                                    textAlign: 'center',
                                }}>{this.props.text}</p>
                                <img style={{width:120, marginTop:15}} src={pictures[this.props.route]}/>
                            </div>}
                                {!this.props.isSpanish &&
                                <div class="one" disabled={this.props.disabled}
                                     style={{width:246, height:230, borderColor:this.props.borderColor, borderWidth:2, backgroundColor:"white"}}
                                     onClick={this.handleButtonClicked}
                                ><p
                                    style={{
                                        marginTop: 14,
                                        fontSize:18,
                                        fontWeight:"bold",
                                        textAlign: 'center',
                                    }}>{this.props.text}</p>
                                    <img style={{width:120, marginTop:15}} src={pictures[this.props.route]}/>
                                </div>}
                        </div>
                        <div className="flip-card-back">
                            <p
                                style={{
                                fontSize:18,
                                fontWeight:"bold",
                                textAlign: 'center',
                                    marginTop : 14
                            }}
                                >{this.props.text}</p>
                            <p style={{
                                fontSize:16, marginTop:-10}}>{descriptions[this.props.route]}</p>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        )
    }
}

export default withRouter(ActivityButton)
