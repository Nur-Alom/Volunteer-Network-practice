import React from 'react';
import './Header.css';
import img from '../../images/logo.png';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="none" variant="light fixed-top" expand="lg">
                <Container>
                    <NavbarBrand to="/home">Volunteer-Network <img style={{ width: "25px", marginBottom: "5px" }} src={img} alt="" /></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-options">
                            <NavLink className="nav" to="/home">Home</NavLink>
                            <NavLink className="nav" to="/donation">Donation</NavLink>
                            <NavLink className="nav" to="/events">Events</NavLink>
                            <NavLink className="user-btn bg-success text-white py-1 px-3 rounded-3" to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink>
                            <NavLink className="admin-btn text-white py-1 px-3 rounded-3" to="/login"><i className="fab fa-black-tie"></i> Admin</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;