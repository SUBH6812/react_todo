import React,{useState,useEffect} from "react";
function Appp3(){
	const [data,setdata]=useState(0);
	const [data1,setdata1]=useState("");
	const [data2,setdata2]=useState([]);
	
	const myfun=(event)=>{

		return (setdata1(event.target.value));}

     const shoot=()=>{setdata2((old)=>{
     	if(data1==""){
     		alert("enter item name");
     		return [...old]
     	}else
     	{
return [...old,data1];
}
     });
   setdata1("");

 };
 const myf=()=>{
 return	data2.filter()

 };
	return(
		<div>
		<h4>hello my dear {data}</h4>
		<input type="text"value={data1}placeholder="enter item name" onChange={myfun} />
		<button onClick={()=>setdata(data+1)}>update</button>
		<button onClick={shoot}>update</button>
		<ol>
		{
         data2.map((itm)=>{
         	return (<li><button onClick={myf}>X</button>{itm}</li>
        )
         })
		}
		
		
		</ol>
		</div>
		);

}
export default Appp3;