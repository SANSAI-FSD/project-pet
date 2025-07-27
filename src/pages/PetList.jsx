import React, { useState } from 'react';
import './PetList.css'
import AddPetForm from '../components/AddPetForm';
import Navbar from '../components/Navbar';
import AllPets from '../components/AllPets';


function PetList() {
  const [showForm, setShowForm] = useState(false);
  

  return (
    <div >
    
    
      <AllPets/>


      
    </div>

    
  );
}

export default PetList;
