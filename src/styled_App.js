import { connect } from 'react-redux';
import styled from 'styled-components';

export const StyledApp = styled.div`
  padding-top: 30px;
  height: 100%;
  min-height: 100vh;
  background: radial-gradient(circle, ${props => props.store.additionalColor[0]} ,${props => props.store.backgroundColor[0]} );
  background-size: 100vw;
  min-width: 1024px;
  padding: 30px;
`;

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
  }),
)(StyledApp);
