import React from 'react';
import { FaSearch, FaFilter, FaPlus } from 'react-icons/fa';
import '../styles/HomeTop.css';
import { useSelector } from 'react-redux';
// import Home from '../pages/Home';
const HomeTop = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className="hometop-component">
      <div className="top-section">
        <h2>Request For Quotation</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="I can provide..."
            style={{ width: '80%' }}
          />
          <div>
            {' '}
            <FaSearch className="search-icon" />
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="Mleft-section">
          <h3>
            {' '}
            <span style={{ color: '#007bff', fontSize: '25px' }}>
              1008
            </span>{' '}
            Buying Request from 500 buyers
          </h3>
        </div>
        {isAuthenticated === true ? (
          <div className="Mright-section">
            <div>
              {' '}
              <FaPlus />
            </div>
            Update Prefrences
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="bottom-section">
        <div className="left-section">
          <FaFilter />
          <label>
            <input type="radio" name="filter" checked />
            All
          </label>
          {isAuthenticated === true ? (
            <>
              <div>
                <input type="radio" name="RFQ" />
                <span> RFQs Matching My Prefrences</span>
              </div>
            </>
          ) : (
            <button>Login/Sign Up to see matching RFQ's</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
