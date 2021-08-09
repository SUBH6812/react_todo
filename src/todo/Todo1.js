import React,{useState} from "react";
const Todo1=()=>{
const [inputdata,setInputdata]=useState("");
const [input1,setInput1]=useState([]);
const ele=(event)=>{
	return (setInputdata(event.target.value))};
const shoot=()=>{
	setInput1((data)=>{
		if(inputdata===""){
         return [...data]
		}else
		{
		return [...data,inputdata];

	}
		
	});
	setInputdata("");
}

const del=(id)=>{
	const count=input1.filter((valu,inx)=>{
	return id!==inx;
});
	setInput1(count);

	

}


	return(
		<div className="con">


		<div className="main">
		<div className="main1">
         <h1 className="hh1">todo list</h1>
         <input type="text" placeholder="Add Items" value={inputdata}
         onChange={ele} />
         <button className="btn" onClick={shoot}>+</button>
         <div>
         {

         input1.map((val,ind)=>{

         return(
         <div className="item1" key={ind} >
         <ol>

         <li>{val}<span className="delet" onClick={()=> del(ind)}>x</span></li>
         </ol>

         </div>
          )})	
     }
         </div>

		</div>
		</div>



		</div>



		);





}
export default Todo1;