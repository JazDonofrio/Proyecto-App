import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import AppBar from './ComponentesMaterial/BarraApp';
import Marco from './ComponentesMaterial/marco/marco';
import RecipeReviewCard from './ComponentesMaterial/publi';
import Registro from './ComponentesMaterial/Registro/Registro';
import Login from './Iniciar sesion/login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registro/>} />
			</Routes>
				

				<header>
					<Marco></Marco>
					<AppBar></AppBar>
					
				</header>
				<Grid
					sx={{marginTop: 2}}
					spacing={4}
					container
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
				>

					<Grid item>
						<RecipeReviewCard></RecipeReviewCard>
					</Grid>

					<Grid item>
						<RecipeReviewCard></RecipeReviewCard>
					</Grid>
					
					<Grid item>
						<RecipeReviewCard></RecipeReviewCard>
					</Grid>

				</Grid>
		</BrowserRouter>

	);
}
export default App;


