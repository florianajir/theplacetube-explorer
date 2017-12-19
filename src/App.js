import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Explorer from './Explorer/Explorer';
import Footer from './components/Footer';
import Nav from './Nav/Nav';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Helmet>
            <meta property='fb:app_id' content={process.env.REACT_APP_FACEBOOK_APP_ID}/>
          </Helmet>
          <Nav/>
          <Explorer/>
          <Footer/>
        </div>
    );
  }
}

export default App;
