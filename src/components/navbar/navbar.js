import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
function Navbar() {
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "nav_list_item_active" : ""
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "nav_list_item_active" : ""
                        }
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
