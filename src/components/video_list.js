import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentVideo } from '.././actions/current_video';
import { setBackgroundColor } from '.././actions/background_color';
import { setAdditionalColor } from '.././actions/additional_color';

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;  
`;

const Video = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 5px;
  width: 250px;
  background-color: rgba(255,255,255, 0.1);
  border: 3px solid ${props => props.store.additionalColor[0]};
  cursor: pointer;
`;

const ConnectedVideo = connect(state => ({
  store: state,
}))(Video);


const VideosTitle = styled.li`
  box-sizing: border-box;
  word-wrap: break-word;  
  list-style-type: none;
  padding-left: 10px;
  padding-right: 5px;
  color: ${props => props.store.additionalColor[0]};
  max-width: 130px;
`;
const ConnectedVideosTitle = connect(state => ({
  store: state,
}))(VideosTitle);

const VideosImg = styled.img`
  max-width: 120px;
  max-height: 90px;
`;

class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VideosContainer>
        {this.props.store.videos.map((videos, index) =>
          (<ConnectedVideo
            key={videos.etag}
            onClick={(event) => {
            this.props.onChangeCurrentVideo(videos);
            this.props.onChangeBackgroundColor(videos.img);
            this.props.onChangeAdditionalColor(videos.img);
          }}
          >
            <VideosImg key={`image ${index}`} innerRef={x => videos.img = x} src={videos.snippet.thumbnails.default.url} />
            <ConnectedVideosTitle key={index}>{videos.snippet.title}</ConnectedVideosTitle>
           </ConnectedVideo>),
        )}
      </VideosContainer>
    );
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onChangeCurrentVideo: (video) => {
      dispatch(setCurrentVideo(video));
    },
    onChangeBackgroundColor: (color) => {
      dispatch(setBackgroundColor(color));
    },
    onChangeAdditionalColor: (color) => {
      dispatch(setAdditionalColor(color));
    },
  }),
)(VideoList);
