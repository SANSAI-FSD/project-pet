// // src/admin/AdminPromoSection.jsx
// import React, { useEffect, useState } from "react";

// const AdminPromoSection = () => {
//   const [promos, setPromos] = useState([]);
//   const [form, setForm] = useState({ image: "", title: "", description: "", link: "" });
//   const [editId, setEditId] = useState(null);

//   const fetchPromos = async () => {
//     const res = await fetch("https://project-user-login-and-registers.onrender.com/api/promos");
//     const data = await res.json();
//     setPromos(data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const method = editId ? "PUT" : "POST";
//     const url = editId
//       ? `https://project-user-login-and-registers.onrender.com/api/promos/${editId}`
//       : "https://project-user-login-and-registers.onrender.com/api/promos";

//     await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     setForm({ image: "", title: "", description: "", link: "" });
//     setEditId(null);
//     fetchPromos();
//   };

//   const handleEdit = (promo) => {
//     setForm(promo);
//     setEditId(promo._id);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure to delete this promo?")) {
//       await fetch(`https://project-user-login-and-registers.onrender.com/api/promos/${id}`, {
//         method: "DELETE",
//       });
//       fetchPromos();
//     }
//   };

//   useEffect(() => {
//     fetchPromos();
//   }, []);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Promo Section Manager</h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
//         <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required  type="file"/>
//         <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
//         <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
//         <input name="link" value={form.link} onChange={handleChange} placeholder="Amazon/Other Link" required />
//         <button type="submit">{editId ? "Update" : "Add"} Promo</button>
//       </form>

//       <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
//         {promos.map((promo) => (
//           <div key={promo._id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
//             <img src={promo.image} alt={promo.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//             <h4>{promo.title}</h4>
//             <p>{promo.description}</p>
//             <a href={promo.link} target="_blank" rel="noopener noreferrer">Link</a>
//             <div style={{ marginTop: "0.5rem" }}>
//               <button onClick={() => handleEdit(promo)}>Edit</button>
//               <button onClick={() => handleDelete(promo._id)} style={{ marginLeft: "1rem" }}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPromoSection;
