import React from 'react';

import LoginForm from '../components/LoginForm';
import '../styles/LoginForm.css';
import { useSelector } from 'react-redux';
const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="form-container">
      {isAuthenticated ? <h1>LogOut Page</h1> : <h1>LogIn Page</h1>}
      <LoginForm />
    </div>
  );
};

export default Login;
