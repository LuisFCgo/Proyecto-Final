import React, { Component } from 'react';
import logo from '../img/Logo.png';
import { NavLink } from 'react-router-dom';

class Barra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false // Inicialmente el usuario no está autenticado
        };
    }

    render() {
        const { isAuthenticated } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <div className="col-4">
                                <img src={logo} alt="Logotype" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-5">
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        <NavLink className="nav-link" href="#" to="/about_us">About us</NavLink>
                                        <NavLink className="nav-link" href="#" to="/destination">Destination</NavLink>
                                        <NavLink className="nav-link" href="#" to="tour">Tour</NavLink>
                                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                {/* Si el usuario está autenticado, se deshabilitan los botones */}
                                {isAuthenticated ? (
                                    <>
                                        <button className="btn btn-warning" disabled>Login</button>
                                        <button className="btn btn-warning" disabled>Sign up</button>
                                    </>
                                ) : (
                                    <>
                                        {/* Si no está autenticado, se muestran los botones */}
                                        <NavLink className="btn btn-warning" to="/login">Login</NavLink>
                                        <NavLink className="btn btn-warning" to="/register">Sign up</NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Barra;