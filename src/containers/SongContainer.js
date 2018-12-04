import React from 'react';
import SongList from '../components/SongList';
import Header from '../components/Header';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}));
  }

  render(){
    return (
      <div>
        <Header/>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }



}

export default SongContainer;
