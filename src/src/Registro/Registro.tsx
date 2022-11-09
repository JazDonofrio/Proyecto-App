import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from 'react';
import LoadingButton from "../ComponentesMaterial/LoadingButton";
import { Send } from "@mui/icons-material";
import { useState } from "react";

const ipcRenderer = window.require('electron').ipcRenderer

const createAccount = () => new Promise<void>((resolve, reject) => {
	setTimeout(() => {
		resolve()
 	}, 3000);
})


function Registro() {
	const [usuario, setUsuario] = useState("")
	const [contraseña, setContraseña] = useState("")
	const [confirmarContraseña, setConfirmarContraseña] = useState("")
	const [nombre, setNombre] = useState("")
	const [apellido, setApellido] = useState("")
	const [mail, setMail] = useState("")
	const [fechaNacimiento, setFechaNacimiento] = useState("")



	const [creatingAccount, setCreatingAccount] = React.useState(false);
	
	function handleNewAccount() {
		setCreatingAccount(true);
		createAccount().then((result) => {
			setCreatingAccount(false);
		}).catch((err) => {
			setCreatingAccount(false);
		});
	}

	function login(): void {
		let credentials = {
		  usuario,
		  contraseña
		}
		if (contraseña === confirmarContraseña)
		  ipcRenderer.send("login", credentials)
		else
		  alert("VERIFICAR PASSWORD")
	  }



	function loginCrear() {
		login();
		handleNewAccount();

	}
	
	return (
		<div id="contenedorcentrado">
			<div id="login">
				<div id="loginform">
					<Stack sx={{ width: "600px", margin: 2 }} spacing={2}>
						<TextField  label="Nuevo usuario" value={usuario}  onChange={e => setUsuario(e.target.value)} id="usuario" type="text" name="Nombre de usuario" placeholder="Ingresar Usuario" required />

						<TextField label="Nombre" value={nombre}  onChange={e => setNombre(e.target.value)} id="Nombre" type="text" name="Nombre" placeholder="Ingresar Nombre" required />

						<TextField label="Apellido" value={apellido}  onChange={e => setApellido(e.target.value)} id="Apellido" type="text" name="Apellido" placeholder="Apellido" required />


						<TextField label="IngresarMail" value={mail}  onChange={e => setMail(e.target.value)} id="Ingresar mail" type="text" placeholder="Ingresar mail" name="Ingresar mail" required />


						<TextField label="Contraseña" value={contraseña}  onChange={e => setContraseña(e.target.value)} id="contraseña" type="password" placeholder="Contraseña" name="contraseña" required />

						<TextField label="ConfirmarContraseña" value={confirmarContraseña}  onChange={e => setConfirmarContraseña(e.target.value)} id="Confirmar contraseña" type="password" placeholder="Confirmar Contraseña" name="contraseña" required />


						<TextField InputLabelProps={{
							shrink: true,
						}} label="Fecha de nacimiento" value={fechaNacimiento}  onChange={e => setFechaNacimiento(e.target.value)} id="fecha de nacimiento" type="date" placeholder="fecha de nacimiento" name="fecha de nacimiento" required />

					</Stack>


							<LoadingButton
								size="medium"
								onClick={loginCrear}
								icon={<Send />}
								loadingPosition="end"
								loading={creatingAccount}
								variant="contained"
								disabled={creatingAccount}
							>Crear Cuenta</LoadingButton>

				</div>

			</div>
		</div>
	);
}

export default Registro;