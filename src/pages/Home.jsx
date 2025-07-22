import React, { useEffect, useState } from 'react';
import './Home.css';
import catDogImg from '../assets/hero.jpeg';
import birdFood from '../assets/bird.png';
import dogFood from '../assets/Dog.png';
import catFood from '../assets/cat.png';
import freezeDogFood from '../assets/dogfood.png';
import accessories from '../assets/accessories.png';
import petDeals from '../assets/petDeal.png';
import beagle from '../assets/beagle.png';
import petPack from '../assets/pet-pack.jpeg';
import bestfood from '../assets/deal.png';
import { Link } from 'react-router-dom';
// import './PetFoodForm.css';
import ext from '../assets/ext.png'
import extt from '../assets/extt.png';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Unconditional Love Awaits 🐾</h1>
          <h3>
            🦴Find your perfect companion today. Special adoption offers this week!🐾
            <br />
            🦴 Bring home happiness — adopt, love, and make a lifelong friend today!
          </h3>
        </div>
        <img src={catDogImg} alt="Cat and Dog" className="hero-img" />
      </section>

      {/* Quick Search */}
      <section className="quick-search">
        <h2>🔍 Find Your Pet</h2>
        <p>Looking for a furry or feathered friend? 🐾</p>
        <p>👇Click a category below to quickly browse adoptable pets.</p>
        <div className="search-buttons">
          {/* <Link to="/pets?type=dog"><button>🐶 Dogs</button></Link>
          <Link to="/pets?type=cat"><button>🐱 Cats</button></Link>
          <Link to="/pets?type=bird"><button>🦜 Birds</button></Link> */}
        </div>
        <img src={ext} style={{ width: '30%', height: '5%' }} alt="extentionimg" />
      </section>

      {/* Special Offer Section */}
      <section className="final-offer upgraded-offer">
        <div className="offer-text">
          <h2>🎁 Special Bundle Offer!</h2>
          <p>Get up to <strong>25% OFF</strong> on all your pet's favorites — limited time only!</p>
          <ul className="offer-features">
            <li>🐾 Healthy Meals for Dogs & Cats</li>
            <li>🦜 Nutritious Food for Birds & Rodents</li>
            <li>🛍️ Free Shipping on orders above ₹999</li>
          </ul>
        </div>
       {/* <Link to="https://www.amazon.in/b?ie=UTF8&node=18589219031"><img src={petPack} alt="Pet Bundle Pack" className="offer-img" /></Link> */}
      </section>

      {/* Categories (Moved under Offers) */}
      <section className="categories">
        <h2>Shop By Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src={birdFood} alt="Bird Food" />
            <p>Bird Food</p>
          </div>
          <div className="category-item">
            <img src={dogFood} alt="Dog Food" />
            <p>Dog Food</p>
          </div>
          <div className="category-item">
            <img src={catFood} alt="Cat Food" />
            <p>Cat Food</p>
          </div>
        </div>
        <img src={extt} alt="" style={{ width: '20%', height: '0%' }} />
      </section>

      {/* Promotions Section */}
      <section className="promotions-grid">
        <div className="promo-box area-left blue">
          <h1 style={{ color:'black', fontSize: '24px', fontWeight: 'bold' }}>🐾Special Promotion</h1>
          <img src={freezeDogFood} alt="Freeze Dog Food" />
          <div className="promo-overlay">
            <h2>NATURE’S BLEND FOODS</h2>
            <h1>Natural Freeze Dog Foods</h1>
          </div>
        </div>

        <div className="promo-box area-top-right-1 red">
          <h1 style={{ color:'black', fontSize: '24px', fontWeight: 'bold',marginTop:'30px' }}> 🐾Dog Collars</h1>
          <img src={accessories} alt="Pet Accessories" />
          <div className="promo-overlay">
            <h2>Accessories that have bands (like elasticbands or adjustable straps)</h2>
            <h1>Banded Pet Accessories</h1>
          </div>
        </div>

        <div className="promo-box area-top-right-2 lightblue">
          <h1 style={{ color:'black', fontSize: '24px', fontWeight: 'bold',marginTop:'50px' }}>🐾Healthy Foods</h1>
          <img src={bestfood} alt="Best Quality Pet Foods" />
          <div className="promo-overlay">
            <h1> 🍖Best Quality Pet Foods</h1>
            <p>Healthy and tasty meals for your pets.</p>
          </div>
        </div>

        <div className="promo-box area-bottom-right pink">
          <h1 style={{ color:'black', fontSize: '24px', fontWeight: 'bold' }}>🐾Feed Better, Spend Less</h1>
          <img src={petDeals} alt="Pet Deals" />
          <div className="promo-overlay">
            <h4>BIG OFFER ALL FOODS</h4>
            <h3>Deal Up To 25% Discounts</h3>
          </div>
        </div>
      </section>

      {/* Pet Health Section */}
      <section className="about-health">
        <div className="health-image">
          <img src={beagle} alt="Beagle" className="beagle-img" />
        </div>
        <div className="health-content">
          <span className="badge">100% ORGANIC PET FOOD</span>
          <h2>Help Your Dog Maintain A Healthier</h2>
          <p className="description">
            Introducing Petcy's delectable range of pet food, crafted with love and care.
            With Petcy, mealtime becomes a delightful experience, fostering the bond between
            you and your pet while protecting essential nourishment.
          </p>
          <div className="features">
            <ul>
              <li>🐾 24/7 Support</li>
              <li>🐾 Pet Taxi Facility</li>
              <li>🐾 Money Back</li>
            </ul>
            <ul>
              <li>🐾 Personalized Care</li>
              <li>🐾 Quick Delivery</li>
              <li>🐾 Lowest Price</li>
            </ul>
          </div>
          {/* <Link to="/pet-food-form">
            <button className="shop-btn-small">Shop Now</button>
          </Link> */}
        </div>
      </section>

      {/* Back to Top Button */}
      {showButton && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
        >
        🦴
        </button>
      )}
    </div>
  );
}

export default Home;
