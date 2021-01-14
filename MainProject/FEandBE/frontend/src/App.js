 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import TimeTable from "./components/timetables/TimeTable";
 import './App.css';
 

 class App extends Component {
   render() {
     return (
       <div>
         <TimeTable></TimeTable>
         <LearningOutcomes></LearningOutcomes>
         <GradeOutcomes></GradeOutcomes>
       </div>
     );
   }
  }
 
 export default App;