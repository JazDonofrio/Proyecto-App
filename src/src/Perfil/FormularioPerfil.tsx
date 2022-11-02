import { TextField } from "@mui/material"
import "Formulario.css"

function App() {
    return (
        <body>
            <h1>Formulario De Perfil</h1>
                <div className="Datos">
                    <ul>
                        <TextField label= "Nombre y Apellido:" placeholder="Escriba su nombre y apellido"/>
                        <TextField label= "Descripción:" placeholder="Escriba una descripción"/>
                        <TextField label= "Teléfono:" placeholder="Escriba su número de teléfono"/>
                        <TextField label= "Trabaja en:" placeholder="Escriba donde trabaja"/>
                        <TextField label= "Cargo:" placeholder="Escriba el cargo que ocupa en su trabajo"/>
                        <TextField label= "Ubicación" placeholder="Escriba su localidad"/>
                        <TextField label= "Fecha de Nacimiento:" placeholder="Escriba su fecha de nacimiento"/>
                    </ul>
                </div>
                <div className="SeparaciónEntreTemas">
                    <style></style>
        </div>
             <div className="BotonesRedesSociales">
                <h3>Redes Sociales</h3>
                     <ul>
                        <TextField label= "Facebook:" placeholder="Escriba su usuario de Facebook"/>
                        <TextField label= "Twitter:" placeholder="Escriba su usuario de Twitter"/>
                        <TextField label= "Instagram:" placeholder="Escriba su usuario de Instagram"/>
                    </ul>
            </div>
        </body>
    )
}