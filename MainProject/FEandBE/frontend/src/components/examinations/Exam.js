import axios from 'axios';
import React, { Component } from 'react';

const DEFAULT_HEIGHT = 20;
const httpLoc = '/api/examinations';

class Exam extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            height: DEFAULT_HEIGHT,
        };
        this.setValue = this.setValue.bind(this);
        this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
    }

    componentDidMount() {
        this.mounted = true;

        this.setFilledTextareaHeight();
        axios.get(`${httpLoc}/1/`)
            .then(res => {
                console.log(res.data);
                const responseData = res.data;
                this.setState({value: res.data.value, 
                    
                });
            });
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
        const { value } = event.target;

        this.setState({ value });
    }

    getExpandableField() {
        const isOneLine = this.state.height <= DEFAULT_HEIGHT;
        const { height, value } = this.state;

        return (
            <div className="courseInfo-form">
                <label htmlFor="textarea" className="calendarinfo">Enter description</label>
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

    clickHandler = () => {
        const course = {
           
            value: this.state.value
        }
        axios.put(`${httpLoc}/1/`, course)
            .then(res => console.log(res));
    };

    render() {
        return (
            <form className="courseInfo-form">
                <h1 className="text-white text-uppercase text-center my-4">Examinations</h1>
            
                {this.getExpandableField()}
                {this.getGhostField()}

                <div className="form-group">
                    <button onClick={this.clickHandler}>Save</button>
                </div>

            </form>
        );
    }
}

export default Exam;
