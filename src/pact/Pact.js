import React,{useState} from "react";
import "./Pact.css"
const Pact=()=>{
	const [data,setData]=useState("");
	const [data1,setData1]=useState([]);
	const shoot=()=>{
		 setData1((old)=>{
			if(data===""){
			return [...old];
		}else{
		return [...old,data];	
		}
	});
	setData("");

	}
	const del=(id)=>{
		const count=data1.filter((vl,inx)=>{
		return id!==inx;
	})
		setData1(count);
}

	return(
		<div>

		<div className="con">
		<div>
		<h1>welcome to todo list</h1>

        <div className="main2">
		<div className="main">
		<h3>Todo List</h3>
		
		<input type="text" placeholder="add items"maxlength="18"value={data} onChange={(ev)=>setData(ev.target.value)} />
		<button onClick={shoot}>ADD</button>
		{ 
			data1.map((valu,ind)=>{
				return (
		<div className="main1" key={ind}>
		<ol>
		<li>{valu}<span onClick={()=>del(ind)}>X</span></li>
		</ol>

		</div>)
		})
	}
		</div>

		</div>
		</div>
		</div>





		</div>


		);
}
export default Pact;