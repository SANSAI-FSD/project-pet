// import React, { useEffect, useState } from "react";
// import "./PromoSection.css";

// const PromoSection = () => {
//   const [promos, setPromos] = useState([]);

//   useEffect(() => {
//     const fetchPromos = async () => {
//       const res = await fetch("https://your-backend-url/api/promos");
//       const data = await res.json();
//       setPromos(data);
//     };
//     fetchPromos();
//   }, []);

//   return (
//     <section className="promo-section">
//       {promos.map((promo) => (
//         <div className="promo-card" key={promo._id}>
//           <a href={promo.link} target="_blank" rel="noopener noreferrer">
//             <img src={promo.image} alt={promo.title} className="promo-img" />
//           </a>
//           <h2>🐾 {promo.title}</h2>
//           <p>{promo.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default PromoSection;
