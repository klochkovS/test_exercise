import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './Menu/Menu';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import Login from './Login';


const App = props => (
  <Router>
    <div>
      {console.log(props)}
      <Menu />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/news" component={News} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);

const mapStateToProps = state => (
  {
    user: state,
  }
);


export default connect(mapStateToProps)(App);
