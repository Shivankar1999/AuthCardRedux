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
              <Link to="/">WorldRef</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Our Work</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>My Deals</Link>
            </li>
            <li>
              <Link>Contacts Us</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <>
                  <Link
                    to={'/login'}
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
                    Seller Log out
                  </Link>
                  <Link style={{ marginLeft: '8px', color: 'blue' }}>
                    Accent Tach. Pvt. Lmt.
                  </Link>
                </>
              ) : (
                <Link to="/login">Seller Log in</Link>
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
