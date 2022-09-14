import React from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AppBar from './ComponentesMaterial/BarraApp';
import RecipeReviewCard  from './ComponentesMaterial/publi';

function App() {
	return (
		<body>
			<div id="mainApp">
				<script id="replace_with_navbar" src="marco.js"></script>
				<div id ="contentArea">
					<div id="mySidebar" className="leftMenu"></div>
					<div id="contentPage">
			
					</div>
				</div>
			</div>
			<AppBar></AppBar>
			<IconButton color="primary" aria-label="upload picture" component="label">
        		<input hidden accept="image/*" type="file" />
       			 <PhotoCamera />
      		</IconButton>
			<header>
	
			</header>
	

			<RecipeReviewCard></RecipeReviewCard>
			<br></br>
			<RecipeReviewCard></RecipeReviewCard>
			<br></br>
			<RecipeReviewCard></RecipeReviewCard>
			<br></br>
			{/*<!-- Parte Tamii -->*/}
			<div className="contenedorPublicacion">
				<div className="col-md-8 col-lg-6 vstack gap-4">

					{/*<!-- Posteo propio -->*/}
					<div className="posteo posteo-body">
						<div className="d-flex mb-3">
							<div className="avatar avatar-xs me-2"><a href="#"> <img className="avatar-img rounded-circle" src="ImagenesIndex\2.jpg" alt=""/> </a>
							</div>
							
							{/*<!-- Escribir -->*/}
							<form className="w-10 0"><textarea className="form-control pe-4 border-0" rows={2} data-autoresize="" placeholder="Comparte lo que piensas..."></textarea></form>
							
							{/*<!-- Opciones posteo -->*/}
							<ul className="nav">
								<li><a className="nav-link" href="#!">Foto</a></li>
								<li><a className="nav-link" href="#!">Video</a></li>
								<li><a href="#" className="nav-link">Evento </a></li>
								<li><a className="nav-link" href="#!">Actividad</a></li>
							</ul>
						
						</div>

					</div>

					<div className="posteo">
							
						<div className="posteo-header">

							<div>
								<div>
									<ul className="nav">

										{/*<!-- Perfil -->*/}
										<li className="separacion"><a className="avatar" href="#!"> <img className="avatar-img rounded-circle" src="ImagenesIndex\1.jpg" alt=""/> </a></li>
										{/*<!-- Info -->*/}
										<li className="sep-text"><h6> <a href="#!"> Lori Ferguson </a></h6></li>
										<li className="sep-hora"><span> 7hr</span></li>
									</ul>
									<p>De vacaciones en Madrid</p>

								</div>

							</div>

						</div>
						
					</div>

				</div>

			</div>

		</body>
		
	);
	
}
export default App;


