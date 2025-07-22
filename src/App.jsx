import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Dashboard from "./pages/Dashboard";
import PetList from "./pages/PetList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PetList" element={<PetList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
