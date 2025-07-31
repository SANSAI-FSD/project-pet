
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AuthForm.css"; // Assuming you have some styles for the form

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const endpoint = isLogin ? "login" : "register";

//   const res = await fetch(`https://project-user-login-and-registers.onrender.com/api/auth/${endpoint}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username, password }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     if (isLogin) {
//       localStorage.setItem("user", JSON.stringify({ username: data.username }));
//       navigate("/dashboard");
//     } else {
//       alert("✅ Registration successful! You can now log in.");
//       setIsLogin(true); // switch to login form
//       setUsername("");  // optional: clear fields
//       setPassword("");
//     }
//   } else {
//     alert(data.error || "Something went wrong");
//   }
// };


//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>{isLogin ? "Login" : "Register"}</h2>
//       <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
//         <input
//           type="text"
//           placeholder="Username"
//           required
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ display: "block", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ display: "block", margin: "10px 0", padding: "8px" }}
//         />
//         <button type="submit" style={{ padding: "8px 16px" }}>
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//       <p style={{ marginTop: "20px" }}>
//         {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//         <button onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Register" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login" : "register";

    const res = await fetch(`https://project-user-login-and-registers.onrender.com/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      if (isLogin) {
        localStorage.setItem("user", JSON.stringify({ username: data.username }));
        navigate("/dashboard");
      } else {
        alert("✅ Registration successful! You can now log in.");
        setIsLogin(true);
        setUsername("");
        setPassword("");
      }
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <div className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
