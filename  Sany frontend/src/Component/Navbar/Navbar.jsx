import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io';


function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3 mb-5 bg-white rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Sany
                    {/* <img src="../../utils/sany-logo-vector.png"></img> */}
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-content="Popover content" aria-expanded="false">
                                Inventory
                            </li>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">Categories<IoMdArrowDropright /></li>
                                <li>Sub-Categories<IoMdArrowDropright />
                                    <ul className="submenu dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className="dropdown-item">Categories<IoMdArrowDropright /></li>
                                        <li><a className="dropdown-item" href="#">Sub-Categories<IoMdArrowDropright /></a></li>
                                        <li><a className="dropdown-item" href="#">Models<IoMdArrowDropright /></a></li>
                                        <li><a className="dropdown-item" href="#">Dealers<IoMdArrowDropright /></a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">Models<IoMdArrowDropright /></a></li>
                                <li><a className="dropdown-item" href="#">Dealers<IoMdArrowDropright /></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customers
                            </li>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">View</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Messaging
                            </li>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/campaigns/create">Create Campaign</Link></li>
                                <li><Link className="dropdown-item" to="#">View Campaign</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/templates/create">Templates</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin Sany
                            </li>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/account">Account</Link></li>
                                <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar