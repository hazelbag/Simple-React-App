import React, { useState } from 'react';
// Import Router and route from react dom
import { BrowserRouter as Router, Route } from "react-router-dom";
// Added bootstrap CDN to the page
import 'bootstrap/dist/css/bootstrap.min.css';
// Importred items from reactstrap
import { Dropdown, DropdownToggle, DropdownMenu, Navbar, NavLink } from 'reactstrap';
// External stylesheet added
import './style.css'
// Import the various pages to be rendered
import Home from './Home';
import Converter from './Converter';
import Win from './Win';

// Dropdown component created and dropdown open is set to false, uses toggle to open and close.
const DropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        // Using <> opening tag and </> closing tag called fragments, no need to add an element such as div
        <>
            {/* BrowserRouter used */}
            <Router>
                {/* Navbar is set to fixed top to keep the dropdown at the top of the page */}
                <Navbar fixed="top">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret active>
                            Select Item Here
                        </DropdownToggle>
                        <DropdownMenu>
                            {/* Dropdown menu items, set the navlinks to the pages */}
                            <NavLink href="/">Home Screen</NavLink>
                            <NavLink href="/converter">Converter</NavLink>
                            <NavLink href="/win">Win!</NavLink>
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
                {/* Route paths added for each page */}
                <Route exact path="/" component={Home} />
                <Route path="/converter" component={Converter} />
                <Route path="/win" component={Win} />
            </Router>
        </>
    );
}

export default DropDown;