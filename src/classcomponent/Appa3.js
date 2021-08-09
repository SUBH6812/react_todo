import React from "react";
class Appa3 extends React.Component{

	constructor(props){
		super(props);
		this.state={
			user:null
		}

	}

	componentDidMount(){
		fetch('https://reqres.in/api/users').then((resp)=>{resp.json().then((result)=>{
			//console.log(result)
			this.setState({user:result.data})

		})
	})
	}
	render(){
		return(
			<div>
			<h2>Fetch API</h2>
			<table>
					<thead><tr><th>s.no</th><th>name</th><th>email</th></tr></thead>
			
			{
				this.state.user ?
				this.state.user.map((item,i)=> {
					return (
					
					<tbody><tr><td>{i+1}</td><td>{item.first_name} {item.last_name}</td><td>{item.email}</td></tr></tbody>
					)
				})
				:
				null
			}
			</table>
			</div>


			);
	}
}
export default Appa3;