import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './Menu/Menu';
import Home from './Home';
import Login from './Login';
import News from './News';
import Profile from './Profile';
import NotFound from './NotFound';


const App = ({ user }) => (
  <Router>
    <div>
      <Menu />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route
          path="/profile"
          render={() => (
            user.isAuth ?
              <Profile /> :
              <Redirect to="/login" />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => (
  {
    user: state,
  }
);

export default connect(mapStateToProps)(App);
