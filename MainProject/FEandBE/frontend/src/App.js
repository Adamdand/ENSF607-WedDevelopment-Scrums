 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import TimeTable from "./components/timetables/TimeTable";
 import Instructors from "./components/instructors/Instructors";
 import GradesTable from "./components/gradesTable/GradeTable";
 import myPdf from "./components/myPDF/myPdf";
 import Form from './components/calendarInfo/Form';

 import './App.css';


 


 class App extends Component {
   render() {
     return (


       <div>
         
         <Form></Form>
         <LearningOutcomes></LearningOutcomes>
         <TimeTable></TimeTable>
         <Instructors></Instructors>
         <GradeOutcomes></GradeOutcomes>
         <GradesTable></GradesTable>
         <myPdf></myPdf>
         
         
       </div>
     );
   }
  }
 
 export default App;