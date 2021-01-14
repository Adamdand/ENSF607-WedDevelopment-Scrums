import axios from 'axios';
import React, { Component } from 'react';

const DEFAULT_HEIGHT = 20;
const httpLoc = '/api/course';

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            coursecode: '',
            coursenumber: '',
            coursename: '',
            coursehours: '',
            academiccredit: '',
            calendarref: '',
            // coursedescription: '',

            height: DEFAULT_HEIGHT,
            value: ''
        };
        this.setValue = this.setValue.bind(this);
        this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
    
        this.setFilledTextareaHeight();
      }
    
    setFilledTextareaHeight() {
        if (this.mounted) {
          const element = this.ghost;
    
          this.setState({
            height: element.clientHeight,
          });
        }
    }
    
    setValue(event) {
        const { value }= event.target;
    
        this.setState({ value });
    }
    
    getExpandableField() {
        const isOneLine = this.state.height <= DEFAULT_HEIGHT;
        const { height, value } = this.state;
    
        return (
          <div className="courseInfo-form">
            <label htmlFor="textarea" className="calendarinfo">Course Description</label>
            <textarea
              className="textarea"
              name="textarea"
              id="textarea"
              autoFocus={true}
              defaultValue={value}
              style={{
                height,
                resize: isOneLine ? "none" : null
              }}
              onChange={this.setValue}
              onKeyUp={this.setFilledTextareaHeight}
            />
          </div>
        );
    }
    
    getGhostField() {
        return (
          <div
            className="textarea textarea--ghost"
            ref={(c) => this.ghost = c}
            aria-hidden="true"
          >
            {this.state.value}
          </div>
        );
    }



    handleCourseCodeChange = (event) => {
        this.setState({
            coursecode: event.target.value
        })
    }

    handleCourseDescriptionChange = (event) => {
        this.setState({
            coursedescription: event.target.value
        })
    }

    handleCourseNumberChange = (event) => {
        this.setState({
            coursenumber: event.target.value
        })
    }

    handleCourseNameChange = (event) => {
        this.setState({
            coursename: event.target.value
        })
    }

    clickHandler = ()=> {
        const course = {
            course: {
                coursecode: this.state.coursecode,
                coursenumber: this.state.coursenumber,
                coursename: this.state.coursename,
                coursehours: this.state.coursehours,
                academiccredit: this.state.academiccredit,
                calendarref: this.state.calendarref,
                value: this.state.value
            }
        }
        axios.put(`${httpLoc}/1/`, course)
        .then(res => console.log(res));
    };
    

    handleCourseHoursChange = (event) => {
        this.setState({
            coursehours: event.target.value
        })
    };

    handleAcademicCreditChange = (event) => {
        this.setState({
            academiccredit: event.target.value
        })
    };

    handleCalendarRefChange = (event) => {
        this.setState({
            calendarref: event.target.value
        })
    };


    render() {
        return (
            <form className="courseInfo-form">
                <h1 className="text-white text-uppercase text-center my-4">Calendar Information</h1>
                {/* <div className="content-section container"> */}
                    <div className="form-group">
                        <label className="calendarinfo" >Course Code</label>
                        <input
                            type='text'
                            value={this.state.coursecode}
                            onChange={this.handleCourseCodeChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label className="calendarinfo" >Course Number</label>
                        <input 
                            type='number'
                            value={this.state.coursenumber}
                            onChange={this.handleCourseNumberChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="calendarinfo" >Course Name</label>
                        <input
                            type='text'
                            value={this.state.coursename}
                            onChange={this.handleCourseNameChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="calendarinfo" >Course Hours</label>
                        <input
                            type='text'
                            value={this.state.coursehours}
                            onChange={this.handleCourseHoursChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label className="calendarinfo" >Academic Credit</label>
                        <input 
                            type='number'
                            value={this.state.academiccredit}
                            onChange={this.handleAcademicCreditChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="calendarinfo" >Calendar Reference</label>
                        <input
                            type='text'
                            value={this.state.calendarref}
                            onChange={this.handleCalendarRefChange} 
                        />
                    </div>

                    {this.getExpandableField()}
                    {this.getGhostField()}

                    <div className="form-group">
                        <button onClick={this.clickHandler}>Save</button>
                    </div>

                    {/* <div>
                        <label className="calendarinfo">Course Description</label>
                        <textarea 
                            value={this.state.coursedescription} 
                            onChange={this.handleCourseDescriptionChange}
                        />
                    </div> */}
                {/* </div> */}
            </form>
        );
    }
}

export default Form;
