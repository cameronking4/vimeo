import React from 'react';

class Section2 extends React.Component{
	
	render(){
		var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus ";
		return(
			
		<div className="section-two">
			<section className="beams">
			<div className="half">
			  <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" alt="Beams"/> </div>
			  <div className="beams-text">
				<h1>BEAMS</h1>
				<p> { text } </p>
			  </div>
			</section>
			
			<section className="bigPic">
			  <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="Big Pic"/>
			  <div className="bigPic-text">
				<h1>MOVE 2</h1>
				<p> { text } </p>
				</div>
			</section>
		 </div>
		);
	}
}
export default Section2;