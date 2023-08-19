import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div>
      <h1>Welcome To Home Page</h1>
      {isAuthenticated === false && (
        <div>
          <Card
            heading="Card 1"
            description="Description for Card 1"
            onAddToDeals={handleAddToDeals}
            onCheckDetails={handleCheckDetails}
          />
          <Card
            heading="Card 2"
            description="Description for Card 2"
            onAddToDeals={handleAddToDeals}
            onCheckDetails={handleCheckDetails}
          />
        </div>
      )}
      {isAuthenticated ? (
        <div>
          <Card
            heading="Card 1"
            description="Description for Card 1"
            onAddToDeals={handleAddToDeals}
            onCheckDetails={handleCheckDetails}
          />
          <Card
            heading="Card 2"
            description="Description for Card 2"
            onAddToDeals={handleAddToDeals}
            onCheckDetails={handleCheckDetails}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
