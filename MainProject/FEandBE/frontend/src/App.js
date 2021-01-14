 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import TimeTable from "./components/timetables/TimeTable";
 import Instructors from "./components/instructors/Instructors";
 import GradesTable from "./components/gradesTable/GradeTable";
 import './App.css';
 import Form from "./components/calendarInfo/Form";

 class App extends Component {
   render() {
     return (
       <div>
         <Form></Form>
         <LearningOutcomes></LearningOutcomes>
<<<<<<< HEAD
         {/* <GradeOutcomes></GradeOutcomes> */}
=======
         <TimeTable></TimeTable>
         <Instructors></Instructors>
         <GradeOutcomes></GradeOutcomes>
         <GradesTable></GradesTable>
>>>>>>> e4887614af6ce08b0012675cd894f70df6e58285
       </div>
     );
   }
  }
 
 export default App;