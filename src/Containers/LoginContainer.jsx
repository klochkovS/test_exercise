import { connect } from 'react-redux';
import Login from '../Components/Login';
import { logIn } from '../actions/actions';

const mapStateToProps = state => ({
  user: state,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: inputAuthData => dispatch(logIn(inputAuthData)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
