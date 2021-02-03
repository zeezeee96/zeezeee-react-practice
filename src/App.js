// import { useState } from 'react';

// function App() {
//   const [input1 , setInput1] = useState(0);
//   const [input2 , setInput2] =  useState(0);
//   const [answer , setAnswer] = useState("");
//   let fn = parseInt(input1);
//   let sn= parseInt(input2);
// const addNumber = () => {
// let total1 = fn + sn;
// setAnswer(total1)
// };
// const subNumber = () => {
//   let total2 = fn - sn;
//   setAnswer(total2)
//   };
//   const mulNumber = () => {
//     let total3 = fn * sn;
//     setAnswer(total3)
//     };
//     const divNumber = () => {
//       let total4 = fn / sn;
//       setAnswer(total4)
//       };
//   return (
//     <div>
//     <input type="number" value={input1} onChange= {(event) => setInput1(event.target.value)}/>
//     <input type="number" value={input2} onChange= {(event) => setInput2(event.target.value)}/>
//     <button onClick={() => addNumber()}>Add</button>
//     <button onClick={() => subNumber()}>Minus</button>
//     <button onClick={() => mulNumber()}>Muliply</button>
//     <button onClick={() => divNumber()}>Divide</button>
//       <p>{answer}</p>
//     </div>
//     );
// }

// export default App;

// import React , { Component } from 'react';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input1: 0,
//       input2: 0,
//       answer: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//      <input type="number" value={this.state.input1} {(event) => this.setState(input1:event.target.value)}/>
//       </div>
//     );
//   }
// }

// export default App;
// import React , { Component } from 'react';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,

//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>My Count Value: {this.state.count}</p>
//         <button onClick={() => this.setState({count: this.state.count +  1, })}>Add</button>
//         <button onClick={() => this.setState({count: 0})}>Reset</button>
//       </div>
//     );
//   }
// }
// export default App;

// import { useState } from 'react';

// function App() {

//   const [check, setCheck] = useState(false);
//   const [fruit, setFruit] = useState("c");
//   const [date, setDate] = useState("");
//   const [radio, setRadio] = useState("tv");
//   return (
//     <div>
//       1.<br />
//       <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
//       <br />
// 2. <br />
//       <label> <input type="checkbox" checked={check} onChange={(event) => setCheck(event.target.checked)} />
// check me </label> <br />
// 3. <br />
//       <select value={fruit} onChange={(event) => setFruit(event.target.value)} >
//         <option value="a">Mango</option>
//         <option value="b">Apple</option>
//         <option value="c">Orange</option>
//         <option value="d">Banana</option>
//       </select> < br />
//       <input type="radio" checked={radio == "radio"} value="radio" name="a" onChange={(event) => setRadio(event.target.value)} />
//       Radio
//       <input type="radio" checked={radio == "tv"} value="tv" name="a" onChange={(event) => setRadio(event.target.value)} />
// TV
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

// const YouTube = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h3> {props.views}</h3>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div>
//       <YouTube title={"how to react"} views={"2000views"} />
//       <YouTube title={"haha"} views={"100views"} />
//     </div>
//   );
// };


import { useState } from 'react';
import StudentRouting from './Studentrouting';
const App = () => {
  return (
    <div>
      <StudentRouting />
    </div>
  );
};

export default App;

