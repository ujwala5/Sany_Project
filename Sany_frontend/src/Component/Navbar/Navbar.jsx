import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3 mb-5 bg-white rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Sany</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Inventory Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Inventory
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Categories <IoMdArrowDropright /></a></li>
                                <li className="dropdown-submenu position-relative">
                                    <a className="dropdown-item" href="#">Sub-Categories <IoMdArrowDropright /></a>
                                    <ul className="dropdown-menu position-absolute start-100 top-0 mt-0">
                                        <li><a className="dropdown-item" href="#">Categories</a></li>
                                        <li><a className="dropdown-item" href="#">Sub-Categories</a></li>
                                        <li><a className="dropdown-item" href="#">Models</a></li>
                                        <li><a className="dropdown-item" href="#">Dealers</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">Models <IoMdArrowDropright /></a></li>
                                <li><a className="dropdown-item" href="#">Dealers <IoMdArrowDropright /></a></li>
                            </ul>
                        </li>

                        {/* Customers Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customers
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">View</Link></li>
                            </ul>
                        </li>

                        {/* Messaging Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Messaging
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/campaigns/create">Create Campaign</Link></li>
                                <li><Link className="dropdown-item" to="#">View Campaign</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/templates/create">Templates</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Admin Dropdown */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin Sany
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/account">Account</Link></li>
                                <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
