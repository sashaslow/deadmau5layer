import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { asyncGetTracks } from '.././actions/videos';


const Input = styled.input`
  display: block;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 auto;
  background: transparent;
  color: ${props => props.store.additionalColor[0]};
  border: 2px solid ${props => props.store.additionalColor[0]};
  background-color: rgba(255,255,255, 0.1);
  width: 700px;
  height: 20px;
  outline: none;
  font-size: 18px;
  text-align: center;
`;
const ConnectedInput = connect(state => ({
  store: state,
}))(Input);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <ConnectedInput
          placeholder="just type here some track name"
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  onInputChange(value) {
    this.setState({ value });
    this.props.onGetTracks(value);
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
  }),
)(SearchBar);
