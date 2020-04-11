import React from 'react';

class Contact extends React.Component {
  render() {
  	return (
        <section className="section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Contactar</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Nacimos para innovar el outdoor media con resultados medibles.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="mt-4 pt-4">
                        <p className="mt-4"><span className="h5">Dirección:</span><br /> <span className="text-muted d-block mt-2">Masaryk 490, CDMX 11550</span></p>
                        {/* <p className="mt-4"><span className="h5">Office Address 2:</span><br /> <span className="text-muted d-block mt-2">2467 Swick Hill Street <br/>New Orleans, LA 70171</span></p> */}
                        <p className="mt-4"><span className="h5">Horario:</span><br /> <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="custom-form mt-4 pt-4">
                        <div id="message"></div>
                        <form method="post" action="home-one" name="contact-form" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Nombre completo*" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Email*" />
                                    </div>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <input type="text" className="form-control" id="subject" placeholder="Asunto.." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Mensaje..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Enviar Mensaje" />
                                    <div id="simple-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    </section> 
  	);
  }
}
export default Contact;