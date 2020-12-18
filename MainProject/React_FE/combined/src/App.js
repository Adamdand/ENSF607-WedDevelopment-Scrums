import './App.css';
import 'bulma/css/bulma.css'
import { useState } from "react";
import logo from './Schulich.png'

function App() {

  const [componentInput, setComponentInput] = useState("");
  const [learningInput, setLearningInput] = useState("");
  const [weightInput, setWeightInput] = useState("");

  const [gradeInput, setGradeInput] = useState("");
  const [gradeMinInput, setGradeMinInput] = useState("");

  const [learningOutcomeIndexInput, setLearningOutcomeIndexInput] = useState("");
  const [learningOutcomeInput, setLearningOutcomeInput] = useState("");

  const [learningNumInput, setLearningNumInput] = useState("");
  const [learningOutcomeAttributeInput, setLearningOutcomeAttributeInput] = useState("");
  const [learningOutcomeInstructionInput, setLearningOutcomeInstructionInput] = useState("");

  function createLearningOutcomesFunction() {
    var table = document.getElementById("LearningOutcomes");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = learningOutcomeIndexInput;
    cell2.innerHTML = learningOutcomeInput;
  }
  

  function createGraduateOutcomesFunction() {
    var table = document.getElementById("LearningOutcomes2");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = learningNumInput;
    cell2.innerHTML = learningOutcomeAttributeInput;
    cell3.innerHTML = learningOutcomeInstructionInput;
  }

  function deleteLearningOutcome() {
    document.getElementById("LearningOutcomes").deleteRow(-1);
  }

  function deleteGraduateOutcome() {
    document.getElementById("LearningOutcomes2").deleteRow(-1);
  }

  function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = componentInput;
    cell2.innerHTML = learningInput;
    cell3.innerHTML = weightInput;
    sumWeight();
  }

  function sumWeight() {
    var table = document.getElementById("myTable");
    var sumTable = document.getElementById("sumRow")
    var sum = 0;
    // console.log("a")
    for (var i = 0; i < table.rows.length - 1; i++) {
      sum += parseInt(table.rows[i].cells[2].innerHTML)
    }

    sumTable.innerHTML = sum;
  }

  function updateGrade() {
    var element = document.getElementById(gradeInput);
    
    element.innerHTML = gradeMinInput;
  }

  document.addEventListener("DOMContentLoaded", function (e) {
    sumWeight();
  });

  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
    sumWeight();
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  return (
    <div className="App">

      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">Course Information</p>
          </div>
          {/* <div class="tile is-child box">
            <p class="title">Two</p>
          </div> */}
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">
              <img src={logo} alt=""/>
            </p>
          </div>
        </div>
      </div>


      <div className="field">
        <label className="label">Course Subject</label>
        <p className="help">(ex. ENSF)</p>
        <div className="control">
          <input className="input" type="text" placeholder="Subject" />
        </div>

        <label className="label">Course Code</label>
        <p className="help">(ex. 607)</p>
        <div className="control">
          <input className="input" type="text" placeholder="Code" />
        </div>

        <label className="label">Course Name</label>
        <p className="help">(ex. Software Design and Architecture)</p>
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>

      </div>

      <div className="field">
        <div className="control">
          <textarea className="textarea is-primary" placeholder="Course Description/Overview"></textarea>
        </div>
      </div>


      <div className="field">
        <label className="label">Course Hours</label>
        <p className="help">(ex. 3 units; H(3-2))</p>
        <div className="control">
          <input className="input" type="text" placeholder="Course Hours" />
        </div>

        <label className="label">Academic Credit</label>
        <p className="help">(ex. 3)</p>
        <div className="control">
          <input className="input" type="text" placeholder="Academic Credit" />
        </div>

        <label className="label">Calendar Reference</label>
        <p className="help">(ex. Software Design and Architecture)</p>
        <div className="control">
          <input className="input" type="text" placeholder="Enter Link Here" />
        </div>

      </div>


      <ColoredLine color="grey" />

<table className="Number" id="LearningOutcomes">
        <thead>
          <th>Number</th>
          <th>Description</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Design and Develop sotware programs in Java</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Have deep understanding, and a practical knowledge of subject</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Use databases to store and retrieve information</td>
          </tr>

        </tbody>
      </table>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Number"
            value={learningOutcomeIndexInput}
            onChange={(e) => setLearningOutcomeIndexInput(e.target.value)}
          />
        </p>

        <p class="control">
          <input class="input"
            type="text"
            placeholder="Learning Outcome Desctiption"
            value={learningOutcomeInput}
            onChange={(e) => setLearningOutcomeInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary"
            onClick={createLearningOutcomesFunction}
            href="/#"
          >
            Add
          </a>
        </p>
        <p class="control">
          <a class="button is-light"
            onClick={deleteLearningOutcome}
            href="/#"
          >
            Delete
          </a>
        </p>
      </div>


<table className="Number" id="LearningOutcomes2">
        <thead>
          <th>Learning Outcome</th>
          <th>Graduate Attribute</th>
          <th>Instruction Level</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>A1. A knowledge base for engineering</td>
            <td>A (Applied)</td>
          </tr>

          <tr>
            <td>2</td>
            <td>A4. Design</td>
            <td>A (Applied)</td>
          </tr>

          <tr>
            <td>3</td>
            <td>A3. Investigation</td>
            <td>D (Developed)</td>
          </tr>

        </tbody>
      </table>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Outcome Number"
            value={learningNumInput}
            onChange={(e) => setLearningNumInput(e.target.value)}
          />
        </p>

        <p class="control">
          <input class="input"
            type="text"
            placeholder="Graduate Attribute"
            value={learningOutcomeAttributeInput}
            onChange={(e) => setLearningOutcomeAttributeInput(e.target.value)}
          />
        </p>

        <p class="control">
          <input class="input"
            type="text"
            placeholder="Instruction Level"
            value={learningOutcomeInstructionInput}
            onChange={(e) => setLearningOutcomeInstructionInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary"
            onClick={createGraduateOutcomesFunction}
            href="/#"
          >
            Add
          </a>
        </p>
        <p class="control">
          <a class="button is-light"
            onClick={deleteGraduateOutcome}
            href="/#"
          >
            Delete
          </a>
        </p>
      </div>

      <ColoredLine color="grey" />


      <table className="table" id="myTable">
        <thead>
          <th>Component</th>
          <th>Learning Outcome(s) Evaluated</th>
          <th>Weight</th>
        </thead>

        <tbody>
          <tr>
            <td>Assignments</td>
            <td>1-7</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Midterm</td>
            <td>1-7</td>
            <td>40</td>
          </tr>

          <tr>
            <td>Final</td>
            <td>1-7</td>
            <td>40</td>
          </tr>

          <tr>
            <td></td>
            <th>Total</th>
            <td id="sumRow"></td>
          </tr>

        </tbody>
      </table>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Component"
            value={componentInput}
            onChange={(e) => setComponentInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Learning Outcome(s)"
            value={learningInput}
            onChange={(e) => setLearningInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Weight"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary"
            onClick={myCreateFunction}
            href="/#"
          >
            Add
          </a>
        </p>
        <p class="control">
          <a class="button is-light"
            onClick={myDeleteFunction}
            href="/#"
          >
            Delete
          </a>
        </p>
      </div>

      <table className="table" id="grades">
        <thead>
          <th>Letter Grade</th>
          <th>Minimum Grade</th>
        </thead>

        <tbody>
          <tr>
            <td>A+</td>
            <td id="A+">95</td>
          </tr>

          <tr>
            <td>A</td>
            <td id="A">90</td>
          </tr>

          <tr>
            <td>A-</td>
            <td id="A-">85</td>
          </tr>

          <tr>
            <td>B+</td>
            <td id="B+">80</td>
          </tr>

          <tr>
            <td>B</td>
            <td id="B">75</td>
          </tr>

          <tr>
            <td>B-</td>
            <td id="B-">70</td>
          </tr>

          <tr>
            <td>C+</td>
            <td id="C+">65</td>
          </tr>

          <tr>
            <td>C</td>
            <td id="C">60</td>
          </tr>

          <tr>
            <td>C-</td>
            <td id="C-">55</td>
          </tr>

          <tr>
            <td>D+</td>
            <td id="D+">50</td>
          </tr>

          <tr>
            <td>D</td>
            <td id="D">45</td>
          </tr>

          <tr>
            <td>F</td>
            <td id="F">40</td>
          </tr>

        </tbody>
      </table>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Letter Grade"
            value={gradeInput}
            onChange={(e) => setGradeInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input"
            type="text"
            placeholder="Minimum Grade"
            value={gradeMinInput}
            onChange={(e) => setGradeMinInput(e.target.value)}
          />
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary"
            onClick={updateGrade}
            href="/#"
          >
            Update Grade
          </a>
        </p>
      </div>


      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div class="buttons">
          <button class="button is-success">Save changes</button>
          <button class="button is-info">Save and continue</button>
          <button class="button is-danger">Cancel</button>
        </div>
      </div>

    </div>



  );
}

export default App;
