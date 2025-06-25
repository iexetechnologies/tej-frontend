import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100 position-fixed" style={{ width: '250px' }}>
      <h4 className="mb-4 p-3">Tej Fleet</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Bilty
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
