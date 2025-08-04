import React, { useEffect, useState } from "react";
import "./AdminStats.css";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
//   const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [error, setError] = useState("");

  useEffect(() => {
    // console.log("Fetching stats for date:", date);
    fetch(`https://project-user-login-and-registers.onrender.com/api/admin/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setError("Failed to load stats"));
  });

  if (!stats) return <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading pets...</p>
          </div>; // 🆕 loading state
  if (error) return <p className="error">{error}</p>;

  const chartData = [
    { name: "Users Today", value: stats.todayUsers },
    { name: "Pets Today", value: stats.todayPets },
    { name: "Sold Today", value: stats.todaySoldPets },
  ];

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">📊 Admin Dashboard</h1>

      

      <div className="stat-grid">
        <StatCard label="Total Users" value={stats.totalUsers} color="#222" />
        <StatCard label="Users Joined" value={stats.todayUsers} color="#222" />
        <StatCard label="Total Pets" value={stats.totalPets} color="#222" />
        <StatCard label="Pets Added" value={stats.todayPets} color="#222" />
        <StatCard label="Total Sold" value={stats.totalSoldPets} color="#222" />
        <StatCard label="Sold Today" value={stats.todaySoldPets} color="#222" />
      </div>

    </div>
  );
};

const StatCard = ({ label, value, color }) => (
  <div className="stat-card" style={{ backgroundColor: color }}>
    <p className="stat-label">{label}</p>
    <h2 className="stat-value">{value}</h2>
  </div>
);

export default AdminStats;
