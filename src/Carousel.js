import React from "react";
import { Carousel } from "react-responsive-carousel";
import Tile from "./Tile.js"



var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus ";
export default () => (
	
  <Carousel showIndicators={false} showStatus={false} showThumbs={false}  useKeyboardArrows className="presentation-mode">
	
	 <div>
		<Tile movie = "https://player.vimeo.com/video/9860371" h1= "Advanced Stats" slide = "bg2" />
	</div> 
	
	<div> 
		<Tile movie = "https://player.vimeo.com/video/131766159" h1= "The Vimeo Experience" slide = "bg1" />
	</div>
	
	<div>
	<Tile movie = "https://player.vimeo.com/video/207292223" h1= "Vimeo 360" slide = "bg3" />
	</div>
	  
</Carousel>
	
	
);
