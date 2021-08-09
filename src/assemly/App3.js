import React from "react";
import img2 from "./Imagess/20.jpg";
function App3(){
	
	return(
       <>
     
		<div className="div-main">
		<div className="div-img">
<img src=".\flower\16.jpg" width="30%" alt="flower" />
<img src={img2} width="30%" alt="flower" />

		</div>
		<div className="div-content">
<h3>flower1</h3>
<p>lilly</p>
		</div>
		</div>
		</>
	);
}
export default App3;