import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = ({ isAuth }) => (
  <header>
    {console.log(`From menu. isAuth: ${isAuth}`)}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/login">{isAuth ? 'Logout' : 'Login'}</Link>
      </li>
    </ul>
  </header>
);

Menu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    isAuth: state.isAuth,
  }
);

export default connect(mapStateToProps)(Menu);
