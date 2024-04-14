import React, { useState } from 'react';
import {  Collapse, Navbar, NavbarToggler, Alert, Button } from 'reactstrap';
import { PersonCircle } from 'react-bootstrap-icons'
import './topbar.css'

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear()
    window.location.pathname = "/login"
  }


  return (
    <div>
      <Navbar color="light" light expand="md" style={{backgroundColor:"white"}}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Alert color="success" className="my-auto">
            <PersonCircle />&nbsp;&nbsp;&nbsp; Welcome {localStorage.getItem("name")}
          </Alert>

          <Button color="secondary" onClick={logout}>Logout</Button>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;