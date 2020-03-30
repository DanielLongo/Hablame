import React from 'react';

class GradeAudio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
            word : '',
            confidence: ''

        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
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

        fetch('http://0.0.0.0:5000/upload', {
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
            });
        });
    }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <p style={{marginLeft:"25%"}}>{this.state.word}</p>
                <p style={{marginLeft:"25%"}}>{this.state.confidence * 100} %</p>
            </form>
        );
    }
}

export default GradeAudio;
