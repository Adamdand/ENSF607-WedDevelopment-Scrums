// frontend/src/App.js
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import '../../App.css';

const httpLoc = '/api/gradesTable';

class GradeTable extends Component {



  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        letter: '',
        minGrade: ''
      },
      todoList: [],
    };
  }
  componentDidMount() {
    this.refreshList();
    //  this.calcTotal();
  }
  //  calcTotal = () => {
  //   const newItems = this.state.todoList
  //   console.log(newItems);
  //   let total = 0;

  //   newItems.map(item => {
  //     console.log(item.weight);
  //     total += parseInt(item.weight);
  //   });
  //   this.setState({totalWeight: total});
  //  }

  refreshList = () => {
    axios
      .get(`${httpLoc}`)
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  /**
      renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          complete
        </span>
        
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
         Incomplete
        </span>
      </div>
    );
  };
   */

  renderTabList = () => {

  };


  renderItems = () => {
    // var i = 1;
    //  const { viewCompleted } = this.state;
    //  const newItems = this.state.todoList.filter(
    //    item => item.completed === viewCompleted
    //  );
    const newItems = this.state.todoList
    return newItems.map(item => (
      <table>
        <div className="content-section container">
          <div className="edj-row">
            {/* <span className="edj-date date">{i++}</span>  */}
            <span className="edj-item degree">{item.letter}</span>
            <span className="edj-item degree">{item.minGrade}</span>

            <span className="edj-item degree">
              <button
                onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">edit</button>

              {/* <button
             onClick={() => this.handleDelete(item)} className="btn btn-danger">delete</button> */}
            </span>

          </div>
        </div>
      </table>
    ));

  };



  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };


  handleSubmit = item => {
    this.toggle();
    console.log(item);
    if (item.id) {
      const axios = require("axios");
      axios
        .put(`${httpLoc}/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post(`${httpLoc}`, item)
      .then(res => this.refreshList());
  };
  //    handleDelete = item => {
  //      axios
  //        .delete(`${httpLoc}/${item.id}/`, item)
  //        .then(res => this.refreshList());
  //    };
  //    createItem = () => {
  //      const item = { letter: "", minGrade: "" };
  //      this.setState({ activeItem: item, modal: !this.state.modal });
  //      //todoList.push(item);
  //    };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  resetGrades = () => {

    axios.get(`${httpLoc}`)
    .then(res => {res.data.forEach(element => {
      axios.delete(`${httpLoc}/${element.id}/`, element)
    });
    this.recreateList();
  })
    .catch(res => console.log(res));

  }

  recreateList = () => {
  //   const items =  [
  //   {
  //     letter: "A+",
  //     minGrade: 95,
  //     id: 1
  //   },
  //   {
  //     letter: "A",
  //     minGrade: 90,
  //     id: 2
  //   },
  //   {
  //     letter: "A-",
  //     minGrade: 85,
  //     id: 3
  //   },
  //   {
  //     letter: "B+",
  //     minGrade: 80,
  //     id: 4
  //   },
  //   {
  //     letter: "B",
  //     minGrade: 75,
  //     id: 5
  //   },
  //   {
  //     letter: "B-",
  //     minGrade: 70,
  //     id: 6
  //   },
  //   {
  //     letter: "C+",
  //     minGrade: 65,
  //     id: 7
  //   },
  //   {
  //     letter: "C",
  //     minGrade: 60,
  //     id: 8
  //   },
  //   {
  //     letter: "C-",
  //     minGrade: 55,
  //     id: 9
  //   },
  //   {
  //     letter: "D+",
  //     minGrade: 50,
  //     id: 10
  //   },
  //   {
  //     letter: "D",
  //     minGrade: 45,
  //     id: 11
  //   },
  //   {
  //     letter: "F",
  //     minGrade: 45,
  //     id: 12
  //   }
  // ];

  // let json = JSON.stringify(items);
  // let post_data = {json_data: json};
  // axios.post(`${httpLoc}/`, JSON.stringify(items)).
  // then(res => console.log(res));

  // console.log({gradesTable: {
  //   letter: "D",
  //   minGrade: 45,
  //   id: 11
  // }});
  // axios.post(`http://localhost:8000/api/`, {gradesTable: {
  //   letter: "D",
  //   minGrade: 45,
  //   id: 11
  // }})
  // .then(res => console.log(res));

  // items.forEach((item) => {
  //   axios.post(`${httpLoc}/`, item)
  //   .then(res => 1);
  // })
  // items.map((item) => {
  //   axios.post(`${httpLoc}/`, item).then(res => console.log(res))
  //   // console.log(item);
  // })
  // axios.post(`${httpLoc}/`, {
  //   letter: "A+",
  //   minGrade: 95,
  // }).then(axios.post(`${httpLoc}/`, {
  //   letter: "A",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "A-",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "B+",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "B",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "B-",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "C+",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "C",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "C-",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "D+",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "D",
  //   minGrade: 95,
  // }).then().axios.post(`${httpLoc}/`, {
  //   letter: "F",
  //   minGrade: 95,
  // }));

  axios.post(`${httpLoc}/`, {
    letter: "A+",
    minGrade: 95,
  }).then(res => axios.post(`${httpLoc}/`, {
    letter: "A",
    minGrade: 90,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "A-",
    minGrade: 85,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "B+",
    minGrade: 80,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "B",
    minGrade: 75,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "B-",
    minGrade: 70,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "C+",
    minGrade: 65,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "C",
    minGrade: 60,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "C-",
    minGrade: 55,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "D+",
    minGrade: 50,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "D",
    minGrade: 45,
  })).then(res => axios.post(`${httpLoc}/`, {
    letter: "F",
    minGrade: 45,
  })).then(res => this.refreshList());
 
  }

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Letter Grades</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-4">
              <div className="content-section container">
                {/* <div>{this.state.totalWeight}</div> */}
                <div className="edj-row">
                  <h4>
                    <span className="edj-item degree">Letter Grade</span> <span class="edj-item degree">Minimum Grade</span> <span class="edj-item degree"></span>
                  </h4>
                </div>
              </div>

              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
            <div className="">
              <button onClick={this.resetGrades} className="btn btn-primary">
                Reset Grades
                 </button>
            </div>
          </div>
        </div>


        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default GradeTable;