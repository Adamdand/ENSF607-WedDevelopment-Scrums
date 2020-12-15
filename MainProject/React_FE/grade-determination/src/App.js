import './App.css';
import 'bulma/css/bulma.css'

function App() {

  function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
  }

  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
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
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>

          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
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
          <input class="input" type="text" placeholder="Component" />
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Learning Outcome(s)" />
        </p>
      </div>

      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Weight" />
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary"
          onClick = {myCreateFunction}>
            Add
          </a>
        </p>
        <p class="control">
          <a class="button is-light"
          onClick = {myDeleteFunction}>
            Delete
          </a>
        </p>
      </div>




    </div>
  );
}

export default App;
