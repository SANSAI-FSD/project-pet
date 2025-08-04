// import React, { useEffect, useState } from "react";
// import "./AdminStats.css";

// const AdminStats = () => {
//   const [stats, setStats] = useState(null);
// //   const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // console.log("Fetching stats for date:", date);
//     fetch(`https://project-user-login-and-registers.onrender.com/api/admin/stats`)
//       .then((res) => res.json())
//       .then((data) => setStats(data))
//       .catch(() => setError("Failed to load stats"));
//   });

//   if (!stats) return <div className="loading-container">
//             <div className="spinner"></div>
//             <p>Loading pets...</p>
//           </div>; // 🆕 loading state
//   if (error) return <p className="error">{error}</p>;

//   const chartData = [
//     { name: "Users Today", value: stats.todayUsers },
//     { name: "Pets Today", value: stats.todayPets },
//     { name: "Sold Today", value: stats.todaySoldPets },
//   ];

//   return (
//     <div className="admin-dashboard">
//       <h1 className="dashboard-title">📊 Admin Dashboard</h1>

      

//       <div className="stat-grid">
//         <StatCard label="Total Users" value={stats.totalUsers} color="#222" />
//         <StatCard label="Users Joined" value={stats.todayUsers} color="#222" />
//         <StatCard label="Total Pets" value={stats.totalPets} color="#222" />
//         <StatCard label="Pets Added" value={stats.todayPets} color="#222" />
//         <StatCard label="Total Sold" value={stats.totalSoldPets} color="#222" />
//         <StatCard label="Sold Today" value={stats.todaySoldPets} color="#222" />
//       </div>

//     </div>
//   );
// };

// const StatCard = ({ label, value, color }) => (
//   <div className="stat-card" style={{ backgroundColor: color }}>
//     <p className="stat-label">{label}</p>
//     <h2 className="stat-value">{value}</h2>
//   </div>
// );

// export default AdminStats;

import React, { useEffect, useState } from "react";
import "./AdminStats.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://project-user-login-and-registers.onrender.com/api/admin/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setError("Failed to load stats"));
  }, []);

  if (!stats)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading stats...</p>
      </div>
    );

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">📊 Admin Dashboard</h1>

      <motion.div
        className="stat-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StatCard label="Total Users" value={stats.totalUsers} color="#343a40" />
        <StatCard label="Users Joined" value={stats.todayUsers} color="#6c757d" />
        <StatCard label="Total Pets" value={stats.totalPets} color="#495057" />
        <StatCard label="Pets Added" value={stats.todayPets} color="#adb5bd" />
        <StatCard label="Total Sold" value={stats.totalSoldPets} color="#212529" />
        <StatCard label="Sold Today" value={stats.todaySoldPets} color="#868e96" />
      </motion.div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => (
  <motion.div
    className="stat-card"
    style={{ backgroundColor: color }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
  >
    <p className="stat-label">{label}</p>
    <h2 className="stat-value">
      <CountUp end={value} duration={1.8} separator="," />
    </h2>
  </motion.div>
);

export default AdminStats;
