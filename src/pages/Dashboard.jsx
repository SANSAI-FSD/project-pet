
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import AddPetForm from '../components/AddPetForm';
import qrImage from '../assets/qr.jpg';

const Dashboard = () => {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false);

  return (
    <div>
      <Navbar setShowQR={setShowQR} setShowAddPet={setShowAddPet} />

      {/* QR Popup */}
      {showQR && (
        <div className="qr-popup-overlay">
          <div className="qr-popup">
            <img src={qrImage} alt="QR Code" className="qr-image" />
            <button className="close-btn" onClick={() => setShowQR(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add Pet Popup */}
      {showAddPet && <AddPetForm onClose={() => setShowAddPet(false)} />}

      {/* Main Content */}
      <Home />
      <p>Hello from Dashboard</p>
    </div>
  );
};

export default Dashboard;

