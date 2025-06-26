import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";      // ✅ Your sidebar file
import BiltyForm from "../components/BiltyForm"; // ✅ Your form file

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
          <Routes>
            <Route path="/" element={<BiltyForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
