 // frontend/src/App.js
 import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import Modal from "./Modal";
 import axios from "axios";
 import '../../App.css';
 

 class Instructors extends Component {

  
   constructor(props) {
     super(props);
     this.state = {
       viewCompleted: false,
       activeItem: {
         section: "",
         fname: "",
         lname: "",
         phone: "",
         office: "",
         email: "",
       },
       todoList: []
     };
   }
   componentDidMount() {
     this.refreshList();
   }
   refreshList = () => {
     axios
       .get("/api/instructor/")
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
     const newItems = this.state.todoList;
     //  (item => item.completed === viewCompleted
    // );
     return newItems.map(item => (
       <table>
      <div class = "content-section container">
         <div class="Instructor-row">
         <span class="Instructor-item InstructorTable">{item.section}</span> 
          <span class="Instructor-item InstructorTable">{item.fname}</span>
          <span class="Instructor-item InstructorTable">{item.lname}</span>
          <span class="Instructor-item InstructorTable">{item.phone}</span>
          <span class="Instructor-item InstructorTable">{item.office}</span>
          <span class="Instructor-item InstructorTable">{item.email}</span>


          <span class="Todo-item TodoTable">
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
         .put(`/api/instructor/${item.id}/`, item)
         .then(res => this.refreshList());
       return;
     }
     axios
       .post(`/api/instructor/`, item)
       .then(res => this.refreshList());
   };
   handleDelete = item => {
     axios
       .delete(`/api/instructor/${item.id}/`, item)
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
         <h1 className="text-white text-uppercase text-center my-4">Instructors</h1>
         <div className="row ">
           <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-3">
             <div class = "content-section container">
         <div class="Instructor-row">
           <h4>
              <span class = "Instructor-item InstructorTable">Section</span> <span class ="Instructor-item InstructorTable">F.Name</span> <span class = "Instructor-item InstructorTable">L.Name</span><span class = "Instructor-item InstructorTable">Phone</span><span class = "Instructor-item InstructorTable">Office</span><span class = "Instructor-item InstructorTable">Email</span><span class = "Instructor-item InstructorTable">    </span>
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
                   Add Instructor
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
 export default Instructors;