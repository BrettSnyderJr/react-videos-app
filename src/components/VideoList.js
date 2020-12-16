//import '../css/VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    // Handy for making a list
    // Need to set a key on the root element - performance boost for re-rendering
    const videos = props.videos.map((video) => {
        return <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={props.onVideoSelect} />;
    });

    return (
         <div className="ui relaxed divided list">{videos}</div>
    );
};

export default VideoList;