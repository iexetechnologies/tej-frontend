// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import BiltyForm from '../components/BiltyForm.jsx';
import Register from '../components/Register.jsx';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4" style={{ marginLeft: '250px' }}>
          <Routes>
            <Route path="/bilty" element={<BiltyForm />} />
            <Route path="/register" element={<Register />} />
            {/* Add other routes if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
