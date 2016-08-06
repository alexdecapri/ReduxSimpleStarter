import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCij41njmrplmL4ike_iwAvxlbjWOHSnTY';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });  for ES6! :)
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
