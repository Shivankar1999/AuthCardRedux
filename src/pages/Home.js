import React from 'react';
import { useSelector } from 'react-redux';
// import Card from '../components/Card';

import { useNavigate } from 'react-router-dom';
import HomeTop from '../components/HomeTop';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/HomeTop.css';
import CardComponent from '../components/CardComponent';
const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleAddToDeals = () => {
    // Handle adding to deals logic
    if (isAuthenticated === false) {
      navigate('/login');
      return;
    }
    toast.success('Added to Details on Your list ', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handleCheckDetails = () => {
    // Handle checking details logic
  };

  return (
    <div style={{ marginTop: '10%' }} className="container">
      <HomeTop />
      <div className="cardContainer">
        {isAuthenticated === false && (
          <>
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
          </>
        )}
        {isAuthenticated ? (
          <>
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
            <CardComponent
              onAddToDeals={handleAddToDeals}
              onCheckDetails={handleCheckDetails}
            />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Home;
