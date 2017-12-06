import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import StyledApp from './styled_App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <StyledApp>
      <App />
    </StyledApp>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
