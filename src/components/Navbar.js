import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/home-one">
                    TapCar
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">Producto</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Precios</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Equipo</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Registrarme</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;