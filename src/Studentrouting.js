import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const StudentForm = (props) => {
  const [name, setName] = useState("");
  const [rollnumber, setRollNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [programdate, setProgramDate] = useState("");
  let history = useHistory();

  const saveSdata = () => {
    const studendData = {
      sName: name,
      sRollNumber: rollnumber,
      sDegree: degree,
      sProgramDate: programdate,
      id: Math.round(Math.random() * 1000)
    };
    let stds = localStorage.getItem("sdata");
    if (stds === null) {
      stds = [];
      stds.push(studendData);
      localStorage.setItem("sdata", JSON.stringify(stds));
    } else {
      let storeddata = JSON.parse(stds);
      storeddata.push(studendData);
      localStorage.setItem("sdata", JSON.stringify(storeddata));
    }
    alert("Student Credentials has been submitted")
    history.push("/StudentList");
  };
  function handleClick() {
    history.push("/StudentList");
  }
  return (
    <div>
      <label>Enter your Name:</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Enter your RollNumber:</label>
      <br />
      <input
        type="text"
        value={rollnumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <br />
      <label>Enter your HighestDegree:</label>
      <br />
      <select value={degree}
        onChange={(event) => setDegree(event.target.value)}>
        <option value="" disabled={true}>Choose </option>
        <option value="Matric">Matric</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Master">Master</option>
      </select>
      <br />
      <label>Enter your Program End Date:</label>
      <br />
      <input
        type="date"
        value={programdate}
        onChange={(e) => setProgramDate(e.target.value)}
      />
      <br />
      <button type="button" onClick={handleClick}>
        Cancel
      </button>
      <button type="button" onClick={saveSdata}>
        Add Student Data
      </button>
    </div>
  );
};
const StudentList = (props) => {
  let history = useHistory();
const [students, setStudents] = useState([]);
useEffect (
    () => {
        if(localStorage.getItem("sdata")) {
            setStudents(JSON.parse(localStorage.getItem("sdata")))
        }
    } , []
)
  function handleSClick() {
    history.push("/StudentForm");
  }
function handleEdit (x) {
  history.push("/EditHandler/"+x.id);
}
  const deleteHandler = (x) => {
    setStudents(students.filter((el) => el.id !== x.id));
    let items =JSON.parse(localStorage.getItem("sdata"));
    items = items.filter((el) => el.id !== x.id);
    localStorage.setItem("sdata", JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem("sdata");
    }
};
  return (
    <div>
      <table>
        <tr>
          <th>Serial No</th>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Degree</th>
          <th>Program End Date</th>
          <th>Actions</th>
        </tr>
        {students.map((x,i) => (
          <tr>
              <td>{i+1}</td>
            <td> {x.sName}</td>
            <td> {x.sRollNumber} </td>
            <td> {x.sDegree} </td>
            <td> {x.sProgramDate} </td>
            <td>
                <button onClick={() => handleEdit(x)}>Edit</button>
            <button onClick={() => deleteHandler(x)}>Delete</button>
            </td>
          </tr>
          ))}
      </table>
      <br />
      <button type="button" onClick={handleSClick}>
        Student Form
      </button>
    </div>
  );
};

const EditHandler = (props) => {
 
  let history = useHistory();
  const [editedItem , setEditedItem] =useState(); 
  const [name, setName] = useState("");
  const [rollnumber, setRollNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [programdate, setProgramDate] = useState("");
  let {id} = useParams();
  useEffect (
    () => {
        if(localStorage.getItem("sdata")) {
            let students = JSON.parse(localStorage.getItem("sdata"))
            const student = students.find ((el) => el.id == id)
            setEditedItem(student)
        }
    } , [])
  useEffect(() => {
    if (editedItem) {setName(editedItem.sName)
      setRollNumber(editedItem.sRollNumber)
      setDegree(editedItem.sDegree)
      setProgramDate(editedItem.sProgramDate)};
}, [editedItem]);

const updateSdata = () => {
  const studendData = {
    sName: name,
    sRollNumber: rollnumber,
    sDegree: degree,
    sProgramDate: programdate,
    id: editedItem.id
  };
  let stds = JSON.parse(localStorage.getItem("sdata"));
  const upItems = stds.map((el) => {
    if (el.id === studendData.id) return studendData
    else return el;
});
    
    localStorage.setItem("sdata", JSON.stringify(upItems));
   
  alert("Student Credentials has been updated")
  history.push("/StudentList");
};
function handleClick() {
  history.push("/StudentList");
}
return (
  <div>
    <label>Enter your Name:</label>
    <br />
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <label>Enter your RollNumber:</label>
    <br />
    <input
      type="text"
      value={rollnumber}
      onChange={(e) => setRollNumber(e.target.value)}
    />
    <br />
    <label>Enter your HighestDegree:</label>
    <br />
    <select value={degree}
      onChange={(event) => setDegree(event.target.value)}>
      <option value="" disabled={true}>Choose </option>
      <option value="Matric">Matric</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Bachelor">Bachelor</option>
      <option value="Master">Master</option>
    </select>
    <br />
    <label>Enter your Program End Date:</label>
    <br />
    <input
      type="date"
      value={programdate}
      onChange={(e) => setProgramDate(e.target.value)}
    />
    <br />
    <button type="button" onClick={handleClick}>
      Cancel
    </button>
    <button type="button" onClick={updateSdata}>
      Update Student Data
    </button>
  </div>
 )
}
function StudentRouting() {
 
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/StudentForm">
            <StudentForm />
          </Route>
          <Route path="/StudentList">
            <StudentList />
            </Route>
            <Route path="/EditHandler/:id">
              <EditHandler />            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default StudentRouting;
