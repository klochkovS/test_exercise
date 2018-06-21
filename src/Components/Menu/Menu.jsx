import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/actions';

const Menu = ({ isAuth, onLogOut }) => (
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
        <Link to="/login" onClick={onLogOut}>{isAuth ? 'Logout' : 'Login'}</Link>
      </li>
    </ul>
  </header>
);

Menu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    isAuth: state.isAuth,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLogOut: () => dispatch(logOut()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
