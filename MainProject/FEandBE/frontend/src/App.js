 // frontend/src/App.js
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes"
 import GradeOutcomes from "./components/grades/GradeOutcomes";
 import TimeTable from "./components/timetables/TimeTable";
 import Instructors from "./components/instructors/Instructors";
 import GradesTable from "./components/gradesTable/GradeTable";
 import MyPdf from "./components/myPDF/myPdf";
 import RequiredTextbook from "./components/requiredTextbook/RequiredTextbook";
 import RecommendedTextbook from "./components/recommendedTextbook/RecommendedTextbook";
 import ReactPDFButton from "./components/reactPDF/reactPDFButton";
 import SubmitButton from "./components/printPDF/SubmitButton"

 import Form from './components/calendarInfo/Form';
 import Exam from './components/examinations/Exam';
 import Calculator from './components/useOfCalc/Calculator';

 import './App.css';

 import jsPDF from 'jspdf';
 import html2canvas from 'html2canvas';
import submitButton from './components/printPDF/SubmitButton';
 

 


 class App extends Component {
   render() {
     return (

       <div id="capture">
         <Form></Form>
         <LearningOutcomes></LearningOutcomes>
         <TimeTable></TimeTable>
         <Instructors></Instructors>
         <Exam></Exam>
         <Calculator></Calculator>
         <GradeOutcomes></GradeOutcomes>
         <GradesTable></GradesTable>
         <RequiredTextbook></RequiredTextbook>
         <RecommendedTextbook></RecommendedTextbook>

         <SubmitButton></SubmitButton>
         
         {/* <ReactPDFButton></ReactPDFButton>
         <MyPdf></MyPdf> */}
         
         
       </div>
     );
   }
  }
 
 export default App;