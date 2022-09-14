import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import AppBar from './ComponentesMaterial/BarraApp';
import RecipeReviewCard from './ComponentesMaterial/publi';

function App() {
	return (
		<body>
			<div id="mainApp">
				<script id="replace_with_navbar" src="marco.js"></script>
				<div id="contentArea">
					<div id="mySidebar" className="leftMenu"></div>
					<div id="contentPage">

					</div>
				</div>
			</div>


			<header>
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
	);
}
export default App;


