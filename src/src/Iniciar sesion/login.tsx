
import "./login.css";

function Login(){
	return (
        
        <div id="contenedorcentrado">
            <div id="login">
                <div id="loginform">
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" name="usuario" placeholder="Usuario..." required/>
                    
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" placeholder="Contraseña..." name="password" required/>
                    
                    <button type="submit" title="Ingresar" name="Ingresar">Ingresar</button>
                </div>
                
            </div>
            <div id="derecho">
                <div className="titulo">
                    Bienvenido
                </div>

                <div className="pie-form">
                    <a href="#">¿Perdiste tu contraseña?</a>
                    <a href="#">¿No tienes Cuenta? Registrate</a>

                </div>
            </div>
        </div>
	);
}

export default Login;