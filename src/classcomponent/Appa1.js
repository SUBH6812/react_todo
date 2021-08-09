import React from "react";
class Appa1 extends React.Component{
constructor(){
	super();
	this.state={name:"hira lal",dob:"26/8/2000",color:"red"}
}

  changeColor = () => {
    this.setState({color: "blue"});
  }
   myfun = ()=>{
   	this.setState({name:"Ravi singh"});
   }
	render(){
		return(
			<div>
		<h3>what is your and date of birth</h3>
		<h3>my is {this.state.name}{this.state.color} and date of birth on {this.state.dob}</h3>
		<button
          type="button"
          onClick={this.changeColor}
        >Change color</button>

<button onClick={this.myfun}>change name</button>
 
</div>
			);

	}
}
export default Appa1;