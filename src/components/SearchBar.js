import React from 'react';
import axios from 'axios';
 
export default class SearchBar extends React.Component{
    state = {term:''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        const placeholder="write cars,dogs,flowers... and hit enter";
        return (<div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field"> 
                        <label>Search</label>
                         <input type="text"
                                value = {this.state.term} 
                                placeholder={placeholder}
                                onChange={(e)=>{this.setState({term:e.target.value})}}/>
                        </div>
                    </form>
                </div>
                );
    }
}