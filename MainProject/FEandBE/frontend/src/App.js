 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import './App.css';
 import Form from "./components/calendarInfo/Form";

 class App extends Component {
   render() {
     return (
       <div>
         <Form></Form>
         <LearningOutcomes></LearningOutcomes>
         {/* <GradeOutcomes></GradeOutcomes> */}
       </div>
     );
   }
  }
 
 export default App;