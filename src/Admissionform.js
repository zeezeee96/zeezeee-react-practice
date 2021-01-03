import { useState } from 'react';

function Admissionform() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypepass, setRetypepass] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [campus, setCampus] = useState("");
    const [program, setProgram] = useState("EE");
    const [agreement, setAgreement] = useState(false);
    const submitAlert = () => {
        alert("Credentials Submitted");
        setName("");
        setUsername("");
        setPassword("");
        setRetypepass("");
        setDateofbirth("");
        setCampus("");
        setProgram("");
        setAgreement(false);
    }
    return (
        <div>
            <h3>Admission Form</h3>
            <label>Enter your name:</label><br />
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} /> <br />
            <label>Enter your username:</label><br />
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /> <br />
            <label>Enter your password:</label><br />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> <br />
            <label>Retype password:</label> <br />
            <input type="password" value={retypepass} onChange={(event) => setRetypepass(event.target.value)} /> <br />
            <label>Select date of birth:</label><br />
            <input type="date" value={dateofbirth} onChange={(event) => setDateofbirth(event.target.value)} /> <br />
            <label>Choose your profile picture: </label><br />
            <input type="file" /> <br />
            <label>Desired Campus</label> < br />
            <label><input type="radio" checked={campus == "UET Main"}
                value="UET Main" name="campus" onChange={(event) => setCampus(event.target.value)} /> UET Main </label> <br />
            <label><input type="radio" checked={campus == "UET KSK"}
                value="UET KSK" name="campus" onChange={(event) => setCampus(event.target.value)} /> UET KSK </label> <br />
            <label><input type="radio" checked={campus == "UET Rachna"}
                value="UET Rachna" name="campus" onChange={(event) => setCampus(event.target.value)} /> UET Rachna </label> <br />
            <label><input type="radio" checked={campus == "UET Narowal"}
                value="UET Narowal" name="campus" onChange={(event) => setCampus(event.target.value)} /> UET Narowal </label> <br />
            <label>Select Admission Program:</label>
            <select value={program} onChange={(event) => setProgram(event.target.value)} >
                <option value="ME">Mechanical Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="SE">Software Engineering</option>
                <option value="CE">Civil Engineering</option>
            </select> <br />
            <label><input type="checkbox" checked={agreement}
                onChange={(event) => setAgreement(event.target.checked)} /> I have read nothing , just fullfilling a tick requirement only </label><br />
            <button onClick={() => submitAlert()} >Submit</button>

        </div>
    );
};

export default Admissionform;