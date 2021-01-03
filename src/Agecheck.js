// import { useState } from 'react';

// function Agecheck() {
//   const [age , setAge] = useState(0);
  
//   const [check , setCheck] = useState("");
 
// const ageCheck = () => {
//   if (age > 18){
//   setCheck("Allowed")}
//   else {setCheck("Not Allowed")};
//   };
//   return (
//     <div>
//     <input type="number" value={age} onChange= {(event) => setAge(event.target.value)}/>
//     <button onClick={() => ageCheck()}>Check</button> 
//       <p>{check}</p>
//     </div>
//     );
// }

// export default Agecheck;

import React , { Component } from 'react';
class Agecheck extends Component {
  constructor() {
    super();
    this.state = {
      age: 0,
  answer: "",
    }
    }
    ageCheck(){
      
        if (this.state.age > 18) {this.setState({answer: 'Allow'})}
        else {this.setState({answer: 'Not Allowed'})};
  }
  
  render() {
    return (
      <div>
    <input type="number" value={this.state.age} onChange={(event) => {this.setState( {age: event.target.value})}}/>
    <button onClick={() =>{this.ageCheck()}}>Check</button> 
    <p>{this.state.answer}</p>       
      </div>
    );
  }
}
export default Agecheck;