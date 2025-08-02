
import React, { useEffect, useState } from "react";
import Popup from '../components/Popup';
import AdminNavbar from "../components/AdminNavbar";  

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);
   const [showQR, setShowQR] = useState(false);
    const [showAddPet, setShowAddPet] = useState(false);

  useEffect(() => {
    fetch("https://project-user-login-and-registers.onrender.com/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));

    fetch("https://project-user-login-and-registers.onrender.com/api/admin/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  });

  return (
    <div style={{ padding: "2rem" }}>
    <Popup
        showQR={showQR}
        setShowQR={setShowQR}
        showAddPet={showAddPet}
        setShowAddPet={setShowAddPet}
      />
      <AdminNavbar />
      
      <h2>Admin Panel</h2>

      <section>
        <h3>Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Pets</h3>
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>
              {pet.name} - {pet.breed}-{pet.age}
              
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPanel;
