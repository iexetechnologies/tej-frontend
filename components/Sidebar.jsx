import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-dark text-white position-fixed vh-100 p-3"
      style={{ width: isOpen ? '250px' : '60px', transition: 'width 0.3s', zIndex: 1040 }}
    >
      {/* Hamburger Button (Always top-left) */}
      <Button
        variant="outline-light"
        size="sm"
        onClick={toggleSidebar}
        className="mb-3"
      >
        <List size={20} />
      </Button>

      {/* Sidebar Content (show only when open) */}
      {isOpen && (
        <>
          <h4 className="mb-4">Tej Fleet</h4>
          <ul className="nav nav-pills flex-column mb-auto">
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
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
