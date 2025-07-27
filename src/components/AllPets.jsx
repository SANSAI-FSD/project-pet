import React, { useEffect, useState } from "react";
import "./AllPets.css"; // We'll create this CSS file

const API = import.meta.env.VITE_API_BASE || "https://project-user-login-and-registers.onrender.com/api/pets";

function AllPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(`${API}`);
        if (!res.ok) throw new Error("Failed to fetch pets");
        const data = await res.json();
        setPets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  });

  if (loading) return <div className="loading">Loading pets...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pets-container">
      <h2 className="pets-title">All Pets for Adoption</h2>
      <div className="pets-grid">
        {pets.map((pet, index) => (
          <div
            className="pet-card"
            key={pet._id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={pet.image} alt={pet.name} className="pet-img" />
            <h3 className="pet-name">{pet.name}</h3>
            <p><b>Breed:</b> {pet.breed}</p>
            <p><b>Age:</b> {pet.age} years</p>
            <button className="adopt-btn">Adopt Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPets;
