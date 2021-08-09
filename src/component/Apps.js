import React from "react";
import Apps1 from "./Apps1";
import img1 from "./Imagess/30.jpg"
import img2 from "./Imagess/33.jpg"
function Apps(){
	return (
		<div>
		<h1 className="hh2"> hello</h1>
		<Apps1 imgsrc={img1} name1="ram" id="1234" age="23 year" gender="boy" />
	    <Apps1 imgsrc={img2} name1="sita" id="56234" age="20 year" gender="girl" />
		</div>
		);
}
export default Apps;