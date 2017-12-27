import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import explorer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(explorer);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
