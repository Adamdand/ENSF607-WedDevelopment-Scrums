 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import TimeTable from "./components/timetables/TimeTable";
 import Instructors from "./components/instructors/Instructors";
 import GradesTable from "./components/gradesTable/GradeTable";
 import MyPdf from "./components/myPDF/myPdf";
 import RequiredTextbook from "./components/requiredTextbook/RequiredTextbook"
 import RecommendedTextbook from "./components/recommendedTextbook/RecommendedTextbook"

 import Form from './components/calendarInfo/Form';
 import Exam from './components/examinations/Exam';

 import './App.css';

 class App extends Component {
   render() {
     return (

       <div>
         <Form></Form>
         <LearningOutcomes></LearningOutcomes>
         <TimeTable></TimeTable>
         <Instructors></Instructors>
         <Exam></Exam>
         <GradeOutcomes></GradeOutcomes>
         <GradesTable></GradesTable>
         <RequiredTextbook></RequiredTextbook>
         <RecommendedTextbook></RecommendedTextbook>
         
         <MyPdf></MyPdf>
         
         
       </div>
     );
   }
  }
 
 export default App;