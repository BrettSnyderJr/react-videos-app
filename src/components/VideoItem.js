import '../css/VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

    state = { video: this.props.video };

    // Called 1 time when component loads on screen
    componentDidMount() { 
        //console.log(this.state.video);
    }

    renderContent = () => {

        return (
            <div className="video-item item" onClick={() => this.props.onVideoSelect(this.state.video)}>
                <img className="ui image" src={this.state.video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <div className="content">
                    <div className="header">{this.state.video.snippet.title}</div>
                </div>
            </div>
        );
    }

    render = () => {
        return this.renderContent();
    };
};

export default VideoItem;