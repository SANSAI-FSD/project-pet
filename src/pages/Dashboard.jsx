
import React, { useState } from 'react';
import './Dashboard.css';
import Home from './Home';
import Popup from '../components/Popup';


const Dashboard = () => {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);

  return (
    <div className='dashboard-container'>
    <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
      
      {/* Main Content */}
      <Home />
      
    </div>
  );
};

export default Dashboard;

