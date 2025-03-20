import React from "react";
import { Link } from "react-router-dom";
import "../pageCSS/Navbar.css"; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Village Management Grievance</div>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/complaints">Complaints</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/AdminComplaints">AdminComplaints</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
