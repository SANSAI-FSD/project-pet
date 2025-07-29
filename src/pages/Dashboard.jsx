
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import Popup from '../components/Popup';


const Dashboard = () => {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);

  return (
    <div>
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

