import React from "react";
class Appa2 extends React.Component{
	
constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    console.log("constructor");
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"});
        console.log("mount");
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
      console.log("update");
  }
  render() {
  	console.log("render");
    return (

      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
        
      </div>
    );
  }
}
export default Appa2;