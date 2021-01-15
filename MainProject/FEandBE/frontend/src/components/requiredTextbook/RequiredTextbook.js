 // frontend/src/App.js
 import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import React, { Component } from "react";
 import Modal from "./Modal";
 import axios from "axios";
 import '../../App.css';
 
const httpLoc = '/api/requiredTextbooks';

 class RequiredTextbook extends Component {

    

   constructor(props) {
     super(props);
     this.state = {
       viewCompleted: false,
       activeItem: {
         title: "",
         author: "",
         edition: "",
         publisher: ""
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
         <div className="time-row">
         {/* <span className="edj-date date">{i++}</span>  */}
         <span className="time-item timeTable">{item.title}</span> 
         <span className="time-item timeTable">{item.author}</span> 
          <span className="time-item timeTable">{item.edition}</span>
          <span className="time-item timeTable">{item.publisher}</span>

          <span className="time-item timeTable">
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
     const item = { title: "", author: "", edition: "", publisher: "" };
     this.setState({ activeItem: item, modal: !this.state.modal });
     //todoList.push(item);
   };
   editItem = item => {
     this.setState({ activeItem: item, modal: !this.state.modal });
   };
   render() {
     return (
       <main className="content">
         <h1 className="text-white text-uppercase text-center my-4">Required Textbooks</h1>
         <div className="row ">
           <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card p-4">
             <div className = "content-section container">
             {/* <div>{this.state.totalWeight}</div> */}
         <div className="time-row">
           <h4>
              <span className = "time-item degree">Title</span> <span class ="time-item timeTable">Author</span> <span class = "time-item timeTable">Edition, Year</span> <span class = "time-item timeTable">Publisher</span><span class ="time-item timeTable"> </span>
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
                   Add Textbook
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
 export default RequiredTextbook;