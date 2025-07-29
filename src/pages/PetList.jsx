import React, { useState } from 'react';
import './PetList.css';
import AllPets from '../components/AllPets';
import Popup from '../components/Popup';

function PetList() {
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
      <AllPets />
    </div>
  );
}

export default PetList;
