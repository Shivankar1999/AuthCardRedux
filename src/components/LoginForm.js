// LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/LoginForm.css';
const LoginForm = () => {
  // const [isValidUser, setisValidUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validaePassCheck, setvalidaePassCheck] = useState(true);
  const [validaeUserCheck, setvalidaeUserCheck] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, users, isAuthenticated } = useSelector((state) => state.auth);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' && password === '') {
      toast.error('User Name and Password can not be empty ! try again', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    // } else if (username.trim().length < 3) {
    //   toast.error('UserName have at least 3 character ', {
    //     position: 'top-right',
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   return;
    // }
    // if (password === '') {
    //   toast.error('Password Can not be empty', {
    //     position: 'top-right',
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   return;
    // } else if (password.trim().length < 5) {
    //   toast.error('password should have at least 5 chracter', {
    //     position: 'top-right',
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   return;
    // }
    let LogInFData = { name: username, password: password };
    let CheckPresentUser = users.find(
      (U) => U.username === LogInFData.name.toLowerCase()
    );
    if (CheckPresentUser === undefined) {
      setUsernameError({
        Ferr: 'This account does not exist.Enter deffent account or',
        Eerr: 'create new one',
      });
      setvalidaeUserCheck(false);
      setTimeout(() => {
        setUsernameError('');
        // setUsername('');
        setvalidaeUserCheck(true);
      }, 5000);
      return;
    }
    let CheckPresentUserPassword = users.find(
      (U) => U.password === LogInFData.password
    );

    if (CheckPresentUserPassword === undefined) {
      setPasswordError({
        Ferr: 'Your password is incorrect.If you do not remember your password.',
        Eerr: 'reset it now',
      });
      setvalidaePassCheck(false);
      setTimeout(() => {
        setPasswordError('');
        // setPassword('');
        setvalidaePassCheck(true);
      }, 5000);
      return;
    }

    if (CheckPresentUser && CheckPresentUserPassword) {
      // Perform authentication logic here (e.g., check credentials)
      // For simplicity, we'll just dispatch the login action
      dispatch(login());
      toast.info('User Loged In', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      // setisValidUser(true);

      // return;
      navigate('/');
    }
    //
  };

  return (
    <>
      <div className="login-form">
        <h2>Seller Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              Username <span className="error ">*</span>
            </label>
            {validaeUserCheck === false ? (
              <>
                <span className="ErrMessageContainer">
                  <span className="errorMes">{usernameError.Ferr} </span>
                  <Link>{usernameError.Eerr}</Link>
                </span>
              </>
            ) : (
              ''
            )}
            <input
              className={validaeUserCheck === false ? 'errorMesBor' : ''}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your user name used while registering"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password <span className="error">*</span>
            </label>
            {validaePassCheck === false ? (
              <>
                <span className="ErrMessageContainer">
                  <span className="errorMes">{passwordError.Ferr} </span>
                  <Link>{passwordError.Eerr}</Link>
                </span>
              </>
            ) : (
              ''
            )}
            <input
              className={validaePassCheck === false ? 'errorMesBor' : ''}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter correct password"
            />
          </div>
          <div className="form-group ForgetStaySigned">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                checked={staySignedIn}
                onChange={() => setStaySignedIn(!staySignedIn)}
              />
              Stay signed in
            </label>
            <label>
              {' '}
              <Link> Forget Password</Link>{' '}
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <div className="create-account">
          <p>
            Don't have an account?{' '}
            <NavLink to="/create-account">Create Account</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
