import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from './../context/auth'

const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <Link className="navbar-brand" to="/">Mis Películas Favoritas</Link>

            {
                isAuthenticated &&
                <React.Fragment>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button onClick={() => setIsAuthenticated(false)} className="btn btn-dark">Salir</button>
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
            }
        </nav>
    )
}

export default Navbar