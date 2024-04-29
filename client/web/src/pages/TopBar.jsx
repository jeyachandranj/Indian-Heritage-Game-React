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
      <Navbar color="light" light expand="md" style={{backgroundColor:"rgb(13,71,161)"}}>
        <NavbarToggler onClick={toggle} style={{marginTop:"2rem"}} />
        <Collapse isOpen={isOpen} navbar>
          <Alert color="success" style={{marginLeft:'75rem'}} >
            <PersonCircle />&nbsp;&nbsp;&nbsp; Welcome {localStorage.getItem("name")}
          </Alert>
          <Button className='btn' color="secondary" onClick={logout}>Logout</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;