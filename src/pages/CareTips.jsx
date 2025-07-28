import React from 'react';
import './CareTips.css';
import { Link } from 'react-router-dom';
import PetServices from '../components/PetServices';
import Navbar from '../components/Navbar';

const tips = [
  {
    title: 'Daily Nutrition',
    description: 'Feed your pets high-quality, balanced meals suited to their breed, age, and size.',
    
  },
  {
    title: 'Fresh Water',
    description: 'Always keep a clean, fresh bowl of water accessible to avoid dehydration.',
    
  },
  {
    title: 'Regular Vet Visits',
    description: 'Schedule periodic health checkups and vaccinations to keep your pet healthy.',
    
  },
  {
    title: 'Exercise & Play',
    description: 'Engage your pet with daily walks, games, or interactive toys to promote physical health.',
    
  },
  {
    title: 'Grooming',
    description: 'Brush fur regularly, clean ears, and clip nails to avoid discomfort or infection.',
    
  },
  {
    title: 'Safe Environment',
    description: 'Keep hazardous items like wires, chemicals, and sharp tools out of your pet’s reach.',
    
  },
];

function CareTips() {
  return (
    <>
        <Navbar />
    <div className="care-tips-container">
      <h2 className="care-title">Pet Care Tips 🐾</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
            {/* <Link to={tip.link} className="see-more-link">➡ See More</Link> */}
          </div>
        ))}
      </div>
      <br />
      <hr />
      <PetServices />
    </div>
    </>

  );
}

export default CareTips;
