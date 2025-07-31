
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PetList from "./pages/PetList";
import CareTips from "./pages/CareTips";
import AdminPanel from "./pages/AdminPanel";


const App = () => (
  <BrowserRouter>
    
    <Routes>
  <Route path="/" element={<AuthForm />} />
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
  <Route
    path="/PetList"
    element={
      <PrivateRoute>
        <PetList />
      </PrivateRoute>
    }
  />
  <Route
    path="/care-tips"
    element={
      <PrivateRoute>
        <CareTips />
      </PrivateRoute>
    }
  />
  <Route
  path="/admin"
  element={
    <PrivateRoute adminOnly={true}>
      <AdminPanel />
    </PrivateRoute>
  }
/>
</Routes>



  </BrowserRouter>
);

export default App;
