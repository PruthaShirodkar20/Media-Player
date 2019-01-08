import React from 'react';
import Video from './video';

const VideoList= (props)=>{
    const videoItem =props.videos.map((videoItem)=>{
        return (
        <Video 
        onVideoSelect={props.onVideoSelect}
        key={videoItem.etag} 
        videoItem={videoItem}/>
        );
    }
);
    return(
    <div>
    <h1>VIDEOS</h1>
    <ul className="col-md-4 list-group">
        {videoItem}
    </ul>
    </div>
    );
};
export default VideoList;