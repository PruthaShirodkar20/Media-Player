import React, {Component} from 'react'; // gets the components together
import ReactDOM from 'react-dom';// renders the components on the browser
import SearchBar from './components/searchBar';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videos';
import VideoDetails from './components/videoDetails';
const apiKey="AIzaSyB6ySLVS1BGgOiCb2YSwPYg0hmG2Fev57A";



class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state= { videoList:[],
                      videoSelected:null};
        this.searchVideo('seattle');        
    };
    
    searchVideo(term)
    {
        YTSearch({key:apiKey, term:term},(videoList) =>{
           this.setState({
                          videoList: videoList,
                          videoSelected: videoList[0]
                         });
        });
    }
        
    render(){
    const videoSearch= _.debounce((term)=> {this.searchVideo(term)},300);
        
    return (
        <div>
        <SearchBar onSearchVideoChange={videoSearch} />
        <VideoDetails video={this.state.videoSelected}/>
        <VideoList
        onVideoSelect={videoSelected=>this.setState({videoSelected})}
        videos={this.state.videoList}/>
        </div>
      );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
// the first parameter instantiates the class to be rendered, the second parameter mentions the place on the DOM where it should be rendered