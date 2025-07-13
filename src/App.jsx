// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BiltyForm from '../components/BiltyForm.jsx';
import Register from '../components/Register.jsx';
import Dashboard from '../components/Dashboard.jsx';
import Login from '../components/Login.jsx';
import CustomNavbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // optional: for global styles like page layout
import RecentUploads from '../components/RecentUploads';

const isAuthenticated = !!localStorage.getItem('token');

function App() {
  return (
    <Router>
      <div className="page-container d-flex flex-column min-vh-100">

        {/* Optional: Top Navbar */}
        <CustomNavbar />

        {/* Page content area */}
        <main className="content-wrap flex-grow-1 p-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
            />

            <Route
              path="/bilty"
              element={
                isAuthenticated ? <BiltyForm /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/recent"
              element={
                isAuthenticated ? <RecentUploads /> : <Navigate to="/login" replace />
              }
            />



          </Routes>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
