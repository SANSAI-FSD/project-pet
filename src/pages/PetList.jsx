import React, { useState } from 'react';
import AddPetForm from '../components/AddPetForm';

function PetList() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div >
      <button onClick={() => setShowForm(true)} >Add Pet</button>
      {showForm && <AddPetForm onClose={() => setShowForm(false)} />}
      {/* Existing pet cards can go here */}
    </div>
  );
}

export default PetList;
