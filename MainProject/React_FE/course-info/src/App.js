import './App.css';
import 'bulma/css/bulma.css'

import logo from './Schulich.png'

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



      {/* <table className="table" id="myTable">
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
      </table> */}



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
{/* 
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
      </div> */}




    </div> 
  );
}

export default App;
