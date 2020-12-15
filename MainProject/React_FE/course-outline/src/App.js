import 'bulma/css/bulma.css';
import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import { useReducer, useState } from 'react';

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}




function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}

function addOutComeBtn(){
  alert("learning outcome ADDED!")
}

function deleteOutComeBtn(){
  alert("learning outcome DELETED!")
}

class outcome{
  return;
  handleSubmit = (event) =>{
    return;
  }
}



const App = () => {
  const LearningOutComes = [
    {number: "1", description: "Have a deep understanding, and practical knowledge of objects oriented analysis, design and development."},
    {number: "2", description: "Design and develop software programs in java"},
    {number: "3", description: "Design and Develop client-server applications"},
    {number: "4", description: "Use different design and development utilities and tools."},
  ]

  const renderLearningOutComes = (LearningOutComes, index) =>{
    return(
    <tr key={index}>
      <td>{index}</td>
      <td>{LearningOutComes.description}</td>
    </tr>
    )
  };

  return (
    <div className="App">
      <tr>At the end of this course, you will be able to:</tr>
    <table className="table" id="myTable">
        <thead>
          <th>Number</th>
          <th>Learning Outcome Description</th>
        </thead>

        <tbody>
        {LearningOutComes.map(renderLearningOutComes)}
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
          <input class="input" type="text" placeholder="Number" />
        </p>
        <p class="control">
          <input class="input" type="text" placeholder="Description" />
        </p>
      </div>

      <div class="field has-addons">
        
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