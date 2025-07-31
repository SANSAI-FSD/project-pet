import React, { useState } from 'react';
import Popup from '../components/Popup';

function AdminPanel() {
    const [showQR, setShowQR] = useState(false);
      const [showAddPet, setShowAddPet] = useState(false);
    
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
     <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
      <h1>👑 Welcome, Admin!</h1>
      <p>Here you can manage users, pets, and more.</p>
      {/* Add your admin functionality here */}
    </div>
  );
}

export default AdminPanel;
