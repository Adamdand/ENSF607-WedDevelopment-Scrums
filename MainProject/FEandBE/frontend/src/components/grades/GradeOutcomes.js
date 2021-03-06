 // frontend/src/App.js
 import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import Modal from "./Modal";
 import axios from "axios";
 import '../../App.css';
 
const httpLoc = '/api/grades';

 class GradeOutcomes extends Component {

    

   constructor(props) {
     super(props);
     this.state = {
       viewCompleted: false,
       activeItem: {
         component: "",
         outcomes: "",
         weight: false
       },
       todoList: [],
       totalWeight: ""
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
       .then(res => this.setState({ todoList: res.data}))
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
      <div className = "content-section container">
         <div className="grade-row">
         {/* <span className="edj-date date">{i++}</span>  */}
         <span className="grade-item gradeTable">{item.component}</span> 
         <span className="grade-item gradeTable">{item.outcomes}</span> 
          <span className="grade-item gradeTable">{item.weight}</span>

          <span className="grade-item gradeTable">
           <button
             onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">edit</button>

           <button
             onClick={() => this.handleDelete(item)} className="btn btn-danger">delete</button>
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
       .post(`${httpLoc}/`, item)
       .then(res => this.refreshList());
   };
   handleDelete = item => {
     axios
       .delete(`${httpLoc}/${item.id}/`, item)
       .then(res => this.refreshList());
   };
   createItem = () => {
     const item = { component: "", outcomes: "", weight: "" };
     this.setState({ activeItem: item, modal: !this.state.modal });
     //todoList.push(item);
   };
   editItem = item => {
     this.setState({ activeItem: item, modal: !this.state.modal });
   };
   render() {
     return (
       <main className="content">
         <h1 className="text-white text-uppercase text-center my-4">Final Grade Determination</h1>
         <div className="row ">
           <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-4">
             <div className = "content-section container">
             {/* <div>{this.state.totalWeight}</div> */}
         <div className="grade-row">
           <h4>
              <span className = "grade-item gradeTable">Component</span> <span class ="grade-item gradeTable">Learning Outcome(s) Evaluated</span> <span class = "grade-item gradeTable">Weight</span><span class = "grade-item gradeTable"> </span>
              </h4>
              </div>
            </div>

               {this.renderTabList()}
               <ul className="list-group list-group-flush">
                 {this.renderItems()}
               </ul>
             </div>
             <div className="">
                 <button onClick={this.createItem} className="btn btn-primary">
                   Add Grade Component
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
 export default GradeOutcomes;