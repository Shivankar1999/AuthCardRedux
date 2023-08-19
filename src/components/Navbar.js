import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { logout } from '../actions/authActions';
const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <nav className="NavContainer">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {isAuthenticated ? (
                <>
                  <span>
                    <b>
                      <i>User:</i>
                    </b>
                    &nbsp; {user.name}
                  </span>
                  <button
                    type="submit"
                    style={{ marginLeft: 15 }}
                    onClick={() => {
                      dispatch(logout({ user: {} }));
                      toast.error('User Logout..!', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                      });
                      navigate('/login');
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
