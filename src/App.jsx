import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Dashboard from "./pages/Dashboard";
import PetList from "./pages/PetList";
import AddPetForm from "./components/AddPetForm"; // Import AddPetForm
import qrImage from "./assets/qr.jpg"; // Your QR image

function App() {
  const [showQR, setShowQR] = useState(false);
  const [showAddPet, setShowAddPet] = useState(false); // State for AddPetForm

  return (
    <BrowserRouter>
      {/* Pass both handlers to Navbar */}
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

      {/* Add Pet Popup Form */}
      {showAddPet && <AddPetForm onClose={() => setShowAddPet(false)} />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PetList" element={<PetList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
