import React from 'react'
import { NavLink } from "react-router-dom";

const MainNav = () => {
    return (
        <nav className=''>
            <ul className='nav nav-tabs pt-2'>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="dc" className="nav-link">DC Comics</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="marvel" className="nav-link">Marvel Comics</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="login" className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="search" className="nav-link">Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav