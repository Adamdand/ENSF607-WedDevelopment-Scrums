 // frontend/src/App.js
 import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import Modal from "./Modal";
 import axios from "axios";
 import '../../App.css';
 

 class LearningOutcomes extends Component {

  
   constructor(props) {
     super(props);
     this.state = {
       viewCompleted: false,
       activeItem: {
         description: "",
         completed: false
       },
       todoList: []
     };
   }
   componentDidMount() {
     this.refreshList();
   }
   refreshList = () => {
     axios
       .get("/api/todos/")
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
    var i = 1;
     const { viewCompleted } = this.state;
     const newItems = this.state.todoList.filter(
       item => item.completed === viewCompleted
     );
     return newItems.map(item => (
       <table>
      <div class = "content-section container">
         <div class="learning-row">
         <span class="learning-item LearningTable">{i++}</span> 
          <span class="learning-item LearningTable">{item.description}</span>

          <span class="learning-item LearningTable">
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
         .put(`/api/todos/${item.id}/`, item)
         .then(res => this.refreshList());
       return;
     }
     axios
       .post(`/api/todos/`, item)
       .then(res => this.refreshList());
   };
   handleDelete = item => {
     axios
       .delete(`/api/todos/${item.id}/`, item)
       .then(res => this.refreshList());
   };
   createItem = () => {
     const item = { title: "", description: "", completed: false };
     this.setState({ activeItem: item, modal: !this.state.modal });
     //todoList.push(item);
   };
   editItem = item => {
     this.setState({ activeItem: item, modal: !this.state.modal });
   };
   render() {
     return (
       <main className="content">
         <h1 className="text-white text-uppercase text-center my-4">Learning Outcomes</h1>
         <div className="row ">
           <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-3">
             <div class = "content-section container">
         <div class="learning-row">
           <h4>
              <span class = "learning-item LearningTable">Number</span><span class = "learning-item LearningTable">learning Outcomes</span> <span class = "learning-item LearningTable">      </span>
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
                   Add Learning Outcome
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
 export default LearningOutcomes;
