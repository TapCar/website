import React from 'react';
import { Link } from 'react-router-dom';

class Pricing extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Nuestros Precios</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle font-secondary text-muted text-center padding-t-30">Nuestros planes están hechos para que comiences a mostrar tu campaña desde hoy en cientos de pantallas al mejor costo.</p>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Popular</h4>
                        <h1>$479.0</h1>
                        <h6 className="text-uppercase text-muted">Costo por día</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Alcance: <b className="text-custom">1000 personas</b></p>
                            <p>Tipo de anuncio: <b className="text-custom">Imagen</b></p>
                            <p>Soporte: <b className="text-custom">No</b></p>
                            <p><b className="text-custom">1</b> Anuncio</p>
                            <p><b className="text-custom">Incluye</b> Dashboard de métricas</p>
                        </div>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">Empezar</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box bg-white hover-effect price-active">
                        <h4 className="text-uppercase">Recomendado</h4>
                        <h1>$990.0</h1>
                        <h6 className="text-uppercase text-muted">Costo por día</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Alcance: <b className="text-custom">2000 personas</b></p>
                            <p>Tipo de anuncio: <b className="text-custom">Imagen y Video</b></p>
                            <p>Soporte: <b className="text-custom">Sí</b></p>
                            <p><b className="text-custom">5</b> Anuncios</p>
                            <p><b className="text-custom">Incluye</b> Dashboard de métricas</p>
                        </div>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">Empezar</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Enterprise</h4>
                        <h1>Contactar</h1>
                        <h6 className="text-uppercase text-muted">al equipo de ventas</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Alcance: <b className="text-custom">+2,000</b></p>
                            <p>Tipo de anuncio: <b className="text-custom">Imagen, video e interactivo</b></p>
                            <p>Soporte: <b className="text-custom">Personalizado</b></p>
                            <p><b className="text-custom">Elige</b> cuantos anuncios</p>
                            <p><b className="text-custom">Incluye</b> Dashboard de métricas</p>
                        </div>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">Empezar</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Pricing;