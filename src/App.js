import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Explorer from './containers/Explorer';
import Nav from './containers/TopBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Helmet>
            <meta property='fb:app_id' content={process.env.REACT_APP_FACEBOOK_APP_ID}/>
          </Helmet>
          <Nav/>
          <Explorer/>
        </div>
    );
  }
}

export default App;
