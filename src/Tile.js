import React from 'react';
class Tile extends React.Component{
	
	render(){
		var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus " ;
		
		return(
			<div className= {this.props.slide + " carousel" }>
			<div className="container">
			  <div className="movie">
				<iframe src= {this.props.movie } width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				<div className="carousel-text">
				  <h1> { this.props.h1 }</h1>
				  <p> {text}.</p>
				  <div className="button-container">
					<a className="button" href= "#"> Buy Now </a>
					<a className="button1" href= "#">Watch Trailer</a>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		); 
	}
}
export default Tile;