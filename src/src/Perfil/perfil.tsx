import "perfil.css"

function App() {
	return (
        <body>
                {/* //Inicio de html// */}
            <section className="seccion-perfil-usuario">
                <div className="perfil-usuario-header">
                    <div className="perfil-usuario-portada">
                        <div className="perfil-usuario-avatar">
                            <img src="ImágenesDePerfil/FotoDePerfil.png" alt="img-avatar"/>
                            <button type="button" className="boton-avatar">
                                <i className="far fa-image"></i>
                            </button>
                        </div>
                        <button type="button" className="boton-portada">
                            <i className="far fa-image"></i> Cambiar fondo
                        </button>
                    </div>
                </div>
                <div className="perfil-usuario-body">
                    <div className="perfil-usuario-bio">
                        <h3 className="titulo">Solange Ariadna D´Onofrio</h3>
                        <p className="texto">Buenass, como persona random cuento algunas cosas sobre mi= Me gusta viajar, conocer
                            personas nuevas, pasar tiempo en familia, y los animales (:
                        </p>
                    </div>
                    <div className="perfil-usuario-footer">
                        <ul className="lista-datos">
                            <li><i className="icono fas fa-map-signs"></i> Direccion de usuario: solangeADOnofrio@hotmail.com</li>
                            <li><i className="icono fas fa-phone-alt"></i> Telefono: +54 2995878795.</li>
                            <li><i className="icono fas fa-briefcase"></i> Trabaja en E.P.E.T Nº 12.</li>
                            <li><i className="icono fas fa-building"></i> Cargo Secretaria.</li>
                        </ul>
                        <ul className="lista-datos">
                            <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion Rudecindo Roca.</li>
                            <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento 08/02/2002.</li>
                            <li><i className="icono fas fa-user-check"></i> Registro.</li>
                            <li><i className="icono fas fa-share-alt"></i> Redes sociales.</li>
                        </ul>
                    </div>
                    <div className="redes-sociales">
                        <a href="" className="boton-redes facebook fab fa-facebook-f"><i className="icon-facebook"></i></a>
                        <a href="" className="boton-redes twitter fab fa-twitter"><i className="icon-twitter"></i></a>
                        <a href="" className="boton-redes instagram fab fa-instagram"><i className="icon-instagram"></i></a>
                    </div>
                </div>
            </section>
        {/* //Fin de html// */}

        </body>
    )
}