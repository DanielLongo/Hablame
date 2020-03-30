import React from 'react';

class GradeAudio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
            word : 'NONEYET',
            confidence: ''

        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.updateGrade = this.updateGrade.bind(this);
    }

    componentDidMount() {
        this.handleUploadImage()
    }

    // handleUploadImage(ev) {
    async handleUploadImage() {
        // ev.preventDefault();
        console.log("FKSHFKJHSDFKSDKFHKLSDFHKLJSH")
        console.log(this.props.blobURL)
        const data = new FormData();
        // let blob = await fetch(this.props.blobURL).then(r => r.blob());
        let blob = this.props.blobURL
        // data.append('file', this.uploadInput.files[0]);
        data.append('file', blob)
        // data.append('filename', this.fileName.value);
        data.append('filename', 'wohoo');
        // http://0.0.0.0:5000/upload
        fetch('https://hmbe-272618.appspot.com/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log("STATUS", response.status)
            response.json().then((body) => {
                console.log("body", body)
                this.setState({
                    word: body["word"],
                    confidence: body["confidence"]
                });
                this.updateGrade()
            });
        });
        // console.log("this word", this.state.word)
        // console.log("this props word", this.props.targetWord)

    }

    updateGrade() {
        console.log("UPDATE GRADE")
        console.log(this.state.word)
        console.log(this.props.targetWord)
        if (this.state.word === this.props.targetWord) {
            this.props.submitGrade(1)
        } else {
            this.props.submitGrade(0)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                {/*<p style={{marginLeft:"25%"}}>{this.state.word}</p>*/}
                {/*<p style={{marginLeft:"25%"}}>{this.state.confidence * 100} %</p>*/}
            </form>
        );
    }
}

export default GradeAudio;
