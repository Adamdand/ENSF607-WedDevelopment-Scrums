 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/LearningOutcomes"
 import './App.css';
 

 class App extends Component {
   render() {
     return (
       <LearningOutcomes></LearningOutcomes>
     );
   }
  }
 
 export default App;