import { connect } from 'react-redux';
import styled from 'styled-components';


export const Content = styled.div`
display: flex;
justify-content: space-between;
width: 1024px;
margin: 0 auto;
padding-top: 30px;
`;

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
  }),
)(Content);
