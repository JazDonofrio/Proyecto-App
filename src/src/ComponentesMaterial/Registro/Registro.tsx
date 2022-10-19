import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from 'react';
import LoadingButton from "../LoadingButton";
import { Send } from "@mui/icons-material";


const createAccount = () => new Promise<void>((resolve, reject) => {
	setTimeout(() => {
		resolve()
	}, 3000);
})


function Registro() {
	const [creatingAccount, setCreatingAccount] = React.useState(false);
	function handleNewAccount() {
		setCreatingAccount(true);
		createAccount().then((result) => {
			setCreatingAccount(false);
		}).catch((err) => {
			setCreatingAccount(false);
		});
	}
	return (
		<div id="contenedorcentrado">
			<div id="login">
				<div id="loginform">
					<Stack sx={{ width: "600px", margin: 2 }} spacing={2}>
						<TextField label="Nuevo usuario" id="usuario" type="text" name="Nombre de usuario" placeholder="Ingresar Usuario" required />


						<TextField label="Nombre" id="Nombre" type="text" name="Nombre" placeholder="Ingresar Nombre" required />

						<TextField label="Apellido" id="Apellido" type="text" name="Apellido" placeholder="Apellido" required />


						<TextField label="Ingresar mail" id="Ingresar mail" type="text" placeholder="Ingresar mail" name="Ingresar mail" required />


						<TextField label="Contraseña" id="contraseña" type="password" placeholder="Contraseña" name="contraseña" required />

						<TextField label="Confirmar contraseña" id="Confirmar contraseña" type="password" placeholder="Confirmar Contraseña" name="contraseña" required />


						<TextField InputLabelProps={{
							shrink: true,
						}} label="Fecha de nacimiento" id="fecha de nacimiento" type="date" placeholder="fecha de nacimiento" name="fecha de nacimiento" required />

					</Stack>


							<LoadingButton
								size="medium"
								onClick={handleNewAccount}
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