import React, { useState } from 'react';
import './PetList.css'
import AllPets from '../components/AllPets';
import Navbar from '../components/Navbar';


function PetList() {
  const [showForm, setShowForm] = useState(false);
  

  return (
    <div >
    <Navbar/>
    
    
      <AllPets/>


      
    </div>

    
  );
}

export default PetList;
