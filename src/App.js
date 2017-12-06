import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import { asyncGetTracks } from './actions/videos';
import { setCurrentVideo } from './actions/current_video';
import Content from './Content';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCH4Xp6K_n7hUKDJHDW6CMt2R-LqDk0THU';


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.onGetTracks('');
    YTSearch({ key: API_KEY, term: 'deadmau5' }, (videos) => {
      this.props.onChangeCurrentVideo(videos[0]);
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Content>
          <VideoDetail />
          <VideoList />
        </Content>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onGetTracks: (term) => {
      dispatch(asyncGetTracks(term));
    },
    onChangeCurrentVideo: (video) => {
      dispatch(setCurrentVideo(video));
    },
  }),
)(App);
