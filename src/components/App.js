import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => { 

    const [videos, onSearchSubmit] = useVideos('family guy');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchResults, setSearchResults] = useState("");

    useEffect(() => {
        setSelectedVideo(videos[0]);
        setSearchResults(videos.length ? `${videos.length} videos were found` : "");
    }, [videos]);

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <div>{searchResults}</div>
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

//class App extends React.Component {

    //state = { videos: [], selectedVideo: null };
    
    //componentDidMount() { 
        //this.onSearchSubmit('family guy');
    //}
    
    // onSearchSubmit = async (term) => {
        
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     });
        
    //     if (response.status === 200 && response.data.items) {
    //         this.setState({
    //             videos: response.data.items,
    //             selectedVideo: response.data.items[0]
    //         });
    //     }
    // }

    // onVideoSelect = video => { 
    //     this.setState({ selectedVideo: video });
    // }

    // renderContent = () => {
        
    //     let searchResults = <div></div>;
    //     if (this.state.videos.length > 0) {
    //         searchResults = `${this.state.videos.length} videos were found`;
    //     }

    //     return (
    //         <div className="ui container" style={{ marginTop: '10px' }}>
    //             <SearchBar onSearchSubmit={this.onSearchSubmit} />
    //             <div className="ui grid">
    //                 <div className="ui row">
    //                     <div className="eleven wide column">
    //                         <VideoDetail video={this.state.selectedVideo} />
    //                     </div>
    //                     <div className="five wide column">
    //                         <div>{searchResults}</div>
    //                         <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // render = () => {
    //     return this.renderContent();
    // };
//};

export default App;