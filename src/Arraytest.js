import { useState } from 'react';
function ListItem(props) {
    return <li>{props.item}</li>
}
function ArrayTest() {
    const [input, setInput] = useState("");
    const [numbers, setNumbers] = useState([]);
   
    return (
    <div>
        <input type = "number" value={input} onChange = {(e) => setInput(e.target.value)} />
        <button onClick = {() => setNumbers ([...numbers , input])}>Add Me</button>
    <ul>
        {numbers.map((x) => {
        return <ListItem item= {x} />;
        })}
    </ul>
    </div >
    )
}
export default ArrayTest;