
import React, { useEffect, useState } from "react";
import Popup from '../components/Popup';
import AdminNavbar from "../components/AdminNavbar";  
import AdminStats from "../components/AdminStats";
// import AdminPromoSection from "../components/AdminPromoSection";

const AdminPanel = () => {
  
   const [showQR, setShowQR] = useState(false);
    const [showAddPet, setShowAddPet] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
    <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
      <AdminNavbar />
      
      {/* <h2>Admin Panel</h2> */}
      <AdminStats />
      {/* <AdminPromoSection /> */}
      <h1>soon...promotion section editor controls</h1>

    </div>
  );
};

export default AdminPanel;
