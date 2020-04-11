import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>TapCar</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Inicio</Link></li>
                                <li><Link to="JavaScript:Void(0);">Nosotros</Link></li>
                                <li><Link to="JavaScript:Void(0);">Vacantes</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Información</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Terminos & Condiciones</Link></li>
                                <li><Link to="JavaScript:Void(0);">Nosotros</Link></li>
                                <li><Link to="JavaScript:Void(0);">Jobs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Soporte</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">FAQ</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contacto</Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribirme</h4>
                        <div className="text-muted margin-t-20">
                            <p></p>
                        </div>
                        <form className="form subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <Link to="JavaScript:Void(0);" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;