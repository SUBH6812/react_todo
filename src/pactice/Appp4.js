import React,{useState} from "react";
function Appp4(){
	const [item,setitem]=useState("");
	const [item1,setitem1]=useState([]);
     const myfun=(ev)=>{
     	return setitem(ev.target.value);
     }
     const shoot=()=>{setitem1((old)=>{
     	return [...old,item] ;
     });
 }

	return (
	<div>
		<h4>TODO FILE </h4>
		<input type="text" placeholder="enter name"
		onChange={myfun} />
		<button onClick={shoot}>click</button>
		<ul>
		
            { 
             item1.map((data)=>{
             	return <li>{data} </li>;
             })
            }
		
		</ul>
		
</div>
		);
}
export default Appp4;