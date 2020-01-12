import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import logo from '../../assets/icons/logo.svg';
import bell from '../../assets/icons/bell.svg';
import avatar from '../../assets/icons/avatar.svg';
import search from '../../assets/icons/search.svg'

import './NavBar.css';


function NavBar() {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand href="#home" className="logo">
                <img src={logo} alt="logo" />
            </Navbar.Brand>
            <div className="nav-wrapper" >
                <Form inline>
                    <img src={search} alt="search" />
                    <FormControl 
                        type="text" 
                        placeholder="Search..." 
                        className="search-form" 
                />
                </Form>
                <Nav className="nav">
                    <Nav.Link className="nav-text" href="#support">Support</Nav.Link>
                    <Nav.Link className="nav-text" href="#FAQ">FAQ</Nav.Link>
                    <Nav.Link className="nav-text" href="#notification">
                        <img src={bell} alt="logo" />
                    </Nav.Link>
                    <Nav.Link className="p-0" href="#avatar" >
                        <div className="float-left text-right pr-2 avatar-name">
                            <p>Hello</p>
                            <p>Oluwaleke Ojo</p>
                        </div>
                        <img src={avatar} alt="logo" />
                    </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    )
}

export default NavBar
