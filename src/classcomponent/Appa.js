import React from "react";
import Appa1 from "./Appa1.js"
import Appa2 from "./Appa2.js"
import Appa3 from "./Appa3.js"
class Appa extends React.Component{
	render() {
		return ( 
			<>
			<h1 className="hh2">hello world {this.props.name}</h1>

	<Appa1 />
	<Appa2 />
	<Appa3 />
</>
	);
	}
}


export default Appa;