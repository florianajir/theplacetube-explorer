import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import TopBar from './TopBar';
import Explorer from './Explorer';

const App = () => (
    <div className="App">
      <Helmet>
        <meta property='fb:app_id' content={process.env.REACT_APP_FACEBOOK_APP_ID}/>
      </Helmet>
      <TopBar/>
      <Explorer/>
    </div>
);

export default App;
