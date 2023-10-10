import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import '../../'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><Logo /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <ul className='list-first'>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/category/funko"} >Funkos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/figuras"}>Figuras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/cards"}>Cards</NavLink>
                            </li>
                        </ul>
                        <ul className='list-second'>
                            <li className="nav-item">
                                <Link className="justify-content-end  align-items-center" to={"/cart"}><CartWidget /></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar