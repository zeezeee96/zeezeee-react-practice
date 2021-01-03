import { useState } from 'react';

function Validation() {
    const [name, setName] = useState("");
    const array = ["Danish", "Usman", "Janwar"];
    const [isloggedin , setLoggedIn] = useState(false);
function arrayfinder() {
if (array.find((x) => x== name ) ) {setLoggedIn(true)} 
else {setLoggedIn(false)}  
}

    return (
        <div>
            <label>Enter your name:</label><br />
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} /> <br />
            <button onClick= {() => arrayfinder()} >Submit</button>
            {isloggedin ? "Welcome back" : "Welcome Guest"}
        </div>
    );
};

export default Validation;