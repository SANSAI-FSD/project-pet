// import React, { useEffect, useState } from "react";

// const AdminStats = () => {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://project-user-login-and-registers.onrender.com/api/admin/stats") // Update with your deployed URL if needed
//       .then((res) => res.json())
//       .then((data) => {
//         setStats(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load dashboard stats.");
//         setLoading(false);
//       });
//   });

//   if (loading) return <div style={styles.loading}>Loading dashboard...</div>;
//   if (error) return <div style={styles.error}>{error}</div>;

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>📊 Admin Dashboard</h1>
//       <div style={styles.grid}>
//         <StatCard label="Total Users" value={stats.totalUsers} color="#6C63FF" />
//         <StatCard label="Users Joined Today" value={stats.todayUsers} color="#00C897" />
//         <StatCard label="Total Pets" value={stats.totalPets} color="#FFAA4C" />
//         <StatCard label="Pets Added Today" value={stats.todayPets} color="#4DB6AC" />
//         <StatCard label="Total Sold Pets" value={stats.totalSoldPets} color="#F06292" />
//         <StatCard label="Sold Pets Today" value={stats.todaySoldPets} color="#9575CD" />
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, value, color }) => (
//   <div style={{ ...styles.card, backgroundColor: color }}>
//     <p style={styles.cardLabel}>{label}</p>
//     <h2 style={styles.cardValue}>{value}</h2>
//   </div>
// );

// const styles = {
//   container: {
//     padding: "2rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   title: {
//     textAlign: "center",
//     fontSize: "2rem",
//     marginBottom: "2rem",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "1.5rem",
//   },
//   card: {
//     color: "#fff",
//     borderRadius: "16px",
//     padding: "1.5rem",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   },
//   cardLabel: {
//     fontSize: "1.1rem",
//     marginBottom: "0.5rem",
//   },
//   cardValue: {
//     fontSize: "2rem",
//     fontWeight: "bold",
//   },
//   loading: {
//     textAlign: "center",
//     fontSize: "1.2rem",
//     marginTop: "2rem",
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//     marginTop: "2rem",
//   },
// };

// export default AdminStats;

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
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

      {/* <div className="date-filter">
        <label htmlFor="date">Select Date: </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div> */}

      <div className="stat-grid">
        <StatCard label="Total Users" value={stats.totalUsers} color="#222" />
        <StatCard label="Users Joined" value={stats.todayUsers} color="#222" />
        <StatCard label="Total Pets" value={stats.totalPets} color="#222" />
        <StatCard label="Pets Added" value={stats.todayPets} color="#222" />
        <StatCard label="Total Sold" value={stats.totalSoldPets} color="#222" />
        <StatCard label="Sold Today" value={stats.todaySoldPets} color="#222" />
      </div>

      <div className="chart-section">
        <h2>📈 Today's Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
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
