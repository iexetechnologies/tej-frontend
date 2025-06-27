import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { List, ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showBiltySubmenu, setShowBiltySubmenu] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowBiltySubmenu(false); // collapse submenu if closing sidebar
  };

  const toggleBiltyMenu = () => {
    setShowBiltySubmenu(!showBiltySubmenu);
  };

  return (
    <div
      className="sidebar bg-dark text-white position-fixed vh-100"
      style={{
        width: isOpen ? '250px' : '60px',
        transition: 'width 0.3s ease',
        overflowX: 'hidden',
        zIndex: 1040,
        padding: '10px'
      }}
    >
      {/* Toggle Button */}
      <div className="d-flex justify-content-center mb-3">
        <Button
          variant="outline-light"
          size="sm"
          onClick={toggleSidebar}
        >
          <List size={20} />
        </Button>
      </div>

      {isOpen && (
        <div className="px-2">
          <h5 className="fw-bold text-white mb-4">Tej Carrier Pvt Ltd</h5>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white px-2">Dashboard</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white px-2">Settings</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white px-2">Contact</a>
            </li>

            <li className="nav-item">
              <a href="/  " className="nav-link text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/bilty" className="nav-link text-white">
                Bilty
              </a>
            </li>
            <li>
              <a href="" className="nav-link text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                Contact
              </a>
            </li>

            {showBiltySubmenu && (
              <ul className="nav flex-column ms-3">
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link text-white px-2">Create Bilty</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link text-white px-2">Recent Uploads</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link text-white px-2">[ From - To ] Date Data</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link text-white px-2">[ From - To ] LR Data</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link text-white px-2">Edit options LR Wise</a>
                </li>
              </ul>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
