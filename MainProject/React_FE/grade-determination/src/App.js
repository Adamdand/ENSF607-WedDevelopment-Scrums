import './App.css';
import 'bulma/css/bulma.css'
import { useState } from "react";

function App() {

  const [componentInput, setComponentInput] = useState("");
  const [learningInput, setLearningInput] = useState("");
  const [weightInput, setWeightInput] = useState("");

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

  document.addEventListener("DOMContentLoaded", function (e) {
    sumWeight();
  });

  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
    sumWeight();
  }

  return (
    <div className="App">
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



      {/* <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Component" />
          <input class="input" type="text" placeholder="Learning Outcome(s)" />
          <input class="input" type="text" placeholder="Weight" />
        </p>
        <p class="control">
          <a class="button is-info">
            Add
          </a>

          <a class="button is-info">
            Delete
          </a>
        </p>
      </div> */}

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




    </div>
  );
}

export default App;
