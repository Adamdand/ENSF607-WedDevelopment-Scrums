import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from "./Modal";
import axios from "axios";




export default class submitButton extends Component {
    state = {
        calendarInfo: [],
        examinations: [],
        grades: [],
        gradesTable: [],
        instructor: [],
        learningOutcomes: [],
        recommendedTextbooks: [],
        requiredTextbooks: [],
        timetable: [],
        useOfCalc: []
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    submitClick = () => {
        this.toggle();
        this.getCalendarInfo();
        this.getExaminations();
        this.getGrades();
        this.getGradesTable();
        this.getInstructors();
        this.getLearningOutcomes();
        this.getRecommendedTextbooks();
        this.getRequiredTextbooks();
        this.getTimeTables();
        this.getUseOfCalc();
    }

    getCalendarInfo = () => {
        axios
       .get(`/api/calendarInfo`)
       .then(res => this.setState({ calendarInfo: res.data}))
       .catch(err => console.log(err));
    }

    getExaminations = () => {
        axios
       .get(`/api/examinations`)
       .then(res => this.setState({ examinations: res.data}))
       .catch(err => console.log(err));
    }
    
    getGrades = () => {
        axios
       .get(`/api/grades`)
       .then(res => this.setState({ grades: res.data}))
       .catch(err => console.log(err));
    }
    
    getGradesTable = () => {
        axios
       .get(`/api/gradesTable`)
       .then(res => this.setState({ gradesTable: res.data}))
       .catch(err => console.log(err));
    }
    
    getInstructors = () => {
        axios
       .get(`/api/instructor`)
       .then(res => this.setState({ instructor: res.data}))
       .catch(err => console.log(err));
    }
    
    getLearningOutcomes = () => {
        axios
       .get(`/api/todos`)
       .then(res => this.setState({ learningOutcomes: res.data}))
       .catch(err => console.log(err));
    }

    getRecommendedTextbooks = () => {
        axios
       .get(`/api/recommendedTextbooks`)
       .then(res => this.setState({ recommendedTextbooks: res.data}))
       .catch(err => console.log(err));
    }

    getRequiredTextbooks = () => {
        axios
       .get(`/api/requiredTextbooks`)
       .then(res => this.setState({ requiredTextbooks: res.data}))
       .catch(err => console.log(err));
    }
    
    getTimeTables = () => {
        axios
       .get(`/api/timetable`)
       .then(res => this.setState({ timetable: res.data}))
       .catch(err => console.log(err));
    }

    getUseOfCalc = () => {
        axios
       .get(`/api/useOfCalc`)
       .then(res => this.setState({ useOfCalc: res.data}))
       .catch(err => console.log(err));
    }

    // printing pdf goes here
    handlePrint = () => {
        this.toggle();
        console.log('printing pdf');
        console.log(this.state);
    };

    handleCancel = () => {
        this.toggle();
    }

    render() {
        return (
            <div>
                <button onClick={this.submitClick} className="btn btn-primary">
                    Print PDF
                 </button>

                {this.state.modal ? (
                    <Modal
                        items={this.state}
                        toggle={this.toggle}
                        onSave={this.handlePrint}
                        onCancel={this.handleCancel}
                    />
                ) : null}
            </div>
        )
    }
}
