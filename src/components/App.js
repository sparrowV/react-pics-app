import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageList from './ImageList';
import './ImageList.css';
class App extends React.Component{
    state = {images : [],loading:false}


    onSearchSubmit = async (term) => {
        this.setState({loading:true});
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params:{
                query:term
            }           
        });
        this.setState({images:response.data.results,loading:false});


    }

    render(){
        return (
            <div className="ui container" style={{margin:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
                {this.state.loading && <Loader loadingText="downloading images..."/> }
            </div>
        );
    }
}


export default App;