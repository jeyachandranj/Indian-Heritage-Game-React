import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { PersonCircle, BoxArrowRight, Controller } from 'react-bootstrap-icons';
import './topbar.css';

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  const userName = localStorage.getItem("name") || "Player";

  return (
    <div className="topbar-wrapper">
      <Navbar className="custom-navbar" expand="lg">
        

        <NavbarToggler 
          onClick={toggle} 
          className="custom-toggler"
          aria-label="Toggle navigation"
        />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-content" navbar>
            <NavItem className="user-welcome">
              <div className="welcome-container">
                <PersonCircle className="user-icon" />
                <span className="welcome-text">
                  Welcome, <span className="user-name">{userName}</span>
                </span>
              </div>
            </NavItem>
            
            <NavItem className="logout-section">
              <Button 
                className="logout-btn" 
                onClick={logout}
                aria-label="Logout"
              >
                <BoxArrowRight className="logout-icon" />
                <span className="logout-text">Logout</span>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <style jsx>{`
        .topbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1030;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .custom-navbar {
          background: linear-gradient(135deg,rgb(10, 50, 228) 0%, #764ba2 100%) !important;
          padding: 0.75rem 2rem;
          min-height: 70px;
          backdrop-filter: blur(10px);
          border: none;
        }

        .brand-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white !important;
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .brand-section:hover {
          transform: scale(1.05);
          color: #f8f9fa !important;
        }

        .brand-icon {
          font-size: 2rem;
          color: #ffd700;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .brand-text {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .custom-toggler {
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .custom-toggler:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .custom-toggler .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        .nav-content {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1.5rem;
        }

        .user-welcome {
          margin-right: auto;
        }

        .welcome-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.25rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .welcome-container:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .user-icon {
          font-size: 1.5rem;
          color: #ffd700;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .welcome-text {
          color: white;
          font-weight: 500;
          font-size: 1rem;
        }

        .user-name {
          font-weight: 700;
          color: #ffd700;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .logout-section {
          display: flex;
          align-items: center;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(45deg, #e74c3c, #c0392b) !important;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }

        .logout-btn:hover {
          background: linear-gradient(45deg, #c0392b, #a93226) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
          color: white;
        }

        .logout-btn:active {
          transform: translateY(0);
        }

        .logout-icon {
          font-size: 1.1rem;
        }

        .logout-text {
          font-size: 0.95rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 991px) {
          .custom-navbar {
            padding: 0.75rem 1rem;
          }

          .nav-content {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }

          .user-welcome {
            margin-right: 0;
            width: 100%;
          }

          .welcome-container {
            justify-content: center;
            width: 100%;
          }

          .logout-section {
            width: 100%;
            justify-content: center;
          }

          .logout-btn {
            width: 100%;
            justify-content: center;
            max-width: 200px;
          }

          .brand-text {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 576px) {
          .custom-navbar {
            padding: 0.5rem 1rem;
            min-height: 60px;
          }

          .brand-section {
            font-size: 1.2rem;
            gap: 0.5rem;
          }

          .brand-icon {
            font-size: 1.5rem;
          }

          .welcome-container {
            padding: 0.5rem 1rem;
          }

          .welcome-text {
            font-size: 0.9rem;
          }

          .user-icon {
            font-size: 1.3rem;
          }
        }

        /* Animation for mobile menu */
        @media (max-width: 991px) {
          .collapse.show {
            animation: slideDown 0.3s ease-in-out;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Focus states for accessibility */
        .logout-btn:focus,
        .custom-toggler:focus {
          outline: 2px solid #ffd700;
          outline-offset: 2px;
        }

        /* Loading state animation */
        .brand-icon {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TopBar;