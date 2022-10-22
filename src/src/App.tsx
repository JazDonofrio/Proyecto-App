import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import AppBar from './ComponentesMaterial/BarraApp';
import Marco from './marco/marco';
import RecipeReviewCard from './ComponentesMaterial/publi';

function App() {
	return (
		<BrowserRouter>
			<body> 
				<div id="mainApp">
					<div id="contentArea">
						<div id="mySidebar" className="leftMenu"></div>
						<div id="contentPage">

						</div>
					</div>
				</div>
				

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
			</body>
		</BrowserRouter>

	);
}
export default App;


