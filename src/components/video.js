import React from 'react';

const Video = ({videoItem, onVideoSelect}) =>{
    const imageURL= videoItem.snippet.thumbnails.default.url;
    return (
        <li onClick= {()=>onVideoSelect(videoItem)}className="list-group-item">
            <div className="video-list media">
            <div className="media-left">
            <img className="media-object" src={imageURL}/>
            </div>
            <div className="media-body">
            <div className="media-heading">{videoItem.snippet.title}</div>
        </div>
        </div>
        </li>
    );
};
export default Video;