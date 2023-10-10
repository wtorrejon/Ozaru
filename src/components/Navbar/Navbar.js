import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className='navbar-container' id='navbar'>
        <div className="row">
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><Logo /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/funko"} >Celulares</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/figuras"}>Notebooks</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"//category/cards"}>Auriculares</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="justify-content-end  align-items-center" to={"/cart"}><CartWidget /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    </div>
  )
}

export default Navbar