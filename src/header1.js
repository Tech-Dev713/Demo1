
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd"; // Import Ant Design Grid System
import "./header1.css";
import logo from "./logo.png"; // Ensure the correct path for the logo

const header1 = () => {
    return (
        <header className="header">
            <Row align="middle" justify="space-between" style={{ width: "100%" }}>
                {/* Left Side - EV Charging Station */}
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="logo-container">
                    <img src={logo} alt="EV Charging" className="logo-img" />
                </Col>

                {/* Center - Navigation Menu */}
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="nav-container">
                    <nav>
                        {/* <ul> */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/station">Stations</Link></li>
                            <li><Link to="/bookings">Bookings</Link></li>
                            <li><Link to="/about">About</Link></li>
                        {/* </ul> */}
                    </nav>
                </Col>

                {/* Right Side - Logo */}
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="button-container">
                    <Button>Login</Button>
                    <Button>Register</Button>
                </Col>
            </Row>
        </header>
    );
};

export default header1;