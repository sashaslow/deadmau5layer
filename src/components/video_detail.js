import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  filter: blur(0px);
`;

const VideoDetailText = styled.div`
  color: ${props => props.store.additionalColor[0]};
  background: linear-gradient(rgba(255,255,255, 0.1), rgba(0,0,0, 0.1));
  margin-top: 10px;
  *{
    padding: 5px; 
  }
`;

const СonnectedVideoDetailText = connect(state => ({
  store: state,
}))(VideoDetailText);

const Iframe = styled.iframe`
  width: 700px;
  height: 400px;
`;

const VideoDetail = ({ currentVideo }) => {
  if (!currentVideo) {
    return <div>Loading...</div>;
  }
  const videoId = currentVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(currentVideo);
  return (
    <VideoDetailContainer>
      <div>
        <Iframe src={url} />
      </div>
      <СonnectedVideoDetailText>
        <div>{currentVideo.snippet.title}</div>
        <div>{currentVideo.snippet.description}</div>
      </СonnectedVideoDetailText>
    </VideoDetailContainer>
  );
};

export default connect(
  state => ({
    store: state,
    currentVideo: state.currentVideo[0],
  }),
  dispatch => ({}),
)(VideoDetail);
