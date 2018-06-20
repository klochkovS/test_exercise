import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });

  }

  handleChange(e) {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        {this.props.user.isAuth ? <Redirect to='/profile' /> : null}
        <form>
          <label htmlFor="loggin">Логин</label>
          <input
            id="loggin"
            type="text"
            name="username"
            onChange={this.handleChange}
            required
          /><br />
          <label htmlFor="pass">Пароль</label>
          <input
            id="pass"
            type="password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <button onClick={this.handleSubmit}>Войти</button>
        </form>
      </section>
    );
  }
}

// Login.propTypes = {
//   user: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };

const mapStateToProps = state => (
  {
    user: state,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onSubmit: inputAuthData => dispatch(logIn(inputAuthData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
