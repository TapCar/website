import React from 'react';
import { Link } from 'react-router-dom';

class Process extends React.Component {
  render() {
  	return (
        <section className="section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Cómo funciona</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Crea una campaña, selecciona tu plan y llega a miles de personas diariamente.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center process-left-icon-1">
                    <i className="pe-7s-angle-right"></i>
                </div>
                <div className="col-lg-6 text-center process-left-icon-2">
                    <i className="pe-7s-angle-right"></i>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-pen text-custom"></i>
                        <h4 className="padding-t-15">Diseña tu campaña</h4>
                        <p className="text-muted">Tu tienes el control con nuestra plataforma que te permite diseñar, segmentar y automatizar.</p>
                    </div>
                </div>
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-id text-custom"></i>
                        <h4 className="padding-t-15">Selecciona un plan</h4>
                        <p className="text-muted">No importa si es un día o un mes, te damos la flexibilidad de llegar a la audiencia que necesites.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center process-box">
                        <i className="pe-7s-target text-custom"></i>
                        <h4 className="padding-t-15">Visualiza el impacto de tu campaña</h4>
                        <p className="text-muted">Ve en tiempo real el alcance de tu campaña o los leads que has generado.</p>
                    </div>
                </div>
                <div className="text-center mx-auto">
                <Link to="JavaScript:Void(0);" className="btn btn-custom waves-light waves-effect margin-t-50">Empezar <i className="mdi mdi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Process;