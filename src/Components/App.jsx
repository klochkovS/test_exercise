import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import Login from './Login';


const App = () => (
  <Router>
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Sigh-in</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </header>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/news" component={News} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;
