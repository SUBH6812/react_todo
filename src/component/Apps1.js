import React from "react";

function Apps1(props){
	return (
<div className="imgs">
<img  src={props.imgsrc} alt="flower" width="20%" />
<div>name:{props.name1}</div>
<div>id:{props.id}</div>
<div>age:{props.age}</div>
<div>gender:{props.gender}</div>
</div>

		)
}
export default Apps1;