import React, {Component} from 'react';
//const SearchBar =()=>{
//    return(
//    <div>
//        <label>Search</label>
//        <input type="text" />
//    </div>
//    )
//} functional component

// Class component
class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state={term:'Search Video'};
        this.onInputValueChange=this.onInputValueChange.bind(this);
    }
    render()
    {
        return(<div className="search-title">
            <h1>MEDIA PLAYER</h1>
            <input 
               className="search-bar"
               value= {this.state.term}
               onChange={event=>this.onInputValueChange(event.target.value)}/>
            </div>
        )
    }

onInputValueChange(term)
        {
 this.setState({term});
 this.props.onSearchVideoChange(term);
        }
    
}
export default SearchBar;