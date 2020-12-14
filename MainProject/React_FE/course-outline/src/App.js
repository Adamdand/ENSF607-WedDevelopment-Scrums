import 'bulma/css/bulma.css';
import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import { useReducer, useState } from 'react';

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
  }
  return (
    <div className="App">
        <ReactBootStrap.Table striped bordered hover>
  <thead>
  <b>2. Learning Outcomes</b>
    <tr>
      <th>Number</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {LearningOutComes.map(renderLearningOutComes)}

  </tbody>
  </ReactBootStrap.Table>
    </div>
  );
}

export default App;