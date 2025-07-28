
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login" : "register";
    console.log("Submitting:", { username, password });
    const res = await fetch(`https://project-user-login-and-registers.onrender.com/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      
    });

    const data = await res.json();

    
    if (res.ok && isLogin) {
  console.log("Login success", data);
  if (data?.username) {
  localStorage.setItem("user", JSON.stringify({ username: data.username }));
  navigate("/dashboard");
}
 else {
    console.warn("No user data in response.");
  }
}
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
