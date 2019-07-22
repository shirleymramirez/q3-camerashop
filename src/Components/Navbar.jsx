import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomerView from './CustomerView';
import '../index.css';

const Navbar = () => {
    return(
        <Router>
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    <h3 className="logo">Camera Shop</h3>
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to='/' style={{ padding: '10px' }} className="routerLink">Components</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="routerLink">Github</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={CustomerView} />
        </Router>
    )
}

export default Navbar;