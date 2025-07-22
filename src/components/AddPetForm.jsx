// src/components/AddPetForm.jsx
import React, { useState } from 'react';
import './AddPetForm.css';

function AddPetForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://project-user-login-and-registers.onrender.com/api/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Pet added successfully!');
        onClose();
      } else {
        alert(data.error || 'Failed to add pet.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <h3>Add New Pet</h3>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="type" placeholder="Type (dog/cat/bird)" onChange={handleChange} required />
        <input name="breed" placeholder="Breed" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddPetForm;
