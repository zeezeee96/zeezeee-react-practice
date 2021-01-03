import { useState } from 'react';

function Agg() {
  const [matric , setMatric] = useState(0);
  const [fsc , setFsc] =  useState(0);
  const [answer , setAnswer] = useState("");
  const [remark, setRemark] = useState("");

const aggCalculator = () => {
    let fn= parseInt(matric);
    let sn= parseInt(fsc);
let result = (fn*30/1100 + sn*70/1100)  ;
setAnswer(result) 
};
 
const reMarks = () => {
  if (answer > 70){
  setRemark("Congrats")};
  if (answer < 70){
    setRemark("Sorry")};
  };
  return (
    <div>
    <input type="number" value={matric} onChange= {(event) => setMatric(event.target.value)}/>
    <input type="number" value={fsc} onChange= {(event) => setFsc(event.target.value)}/>
    <button onClick={() => aggCalculator()}>Calculate</button>
     <button onClick={() => reMarks()}>Remarks</button> 
      <p>{answer}</p><p>{remark}</p>
    </div>
    );
}

export default Agg;

// import React , { Component } from 'react';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       matric: 0,
//   fsc:0,
//   result:0
//     };
    
//     }
//     resultCal(){
//         let answer = parseInt(matric)*30/1100 + parseInt(fsc)*70/1100; 
//         return answer
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={{this.resultCal()}>Add</button>
//         <input type="number" value={this.state.matric} onChange={(event) => this.setState(matric: event.target.value)}/>
//       </div>
//     );
//   }
// }
// export default Agg;