 // frontend/src/components/Modal.js

 import React, { Component } from "react";
 import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Form,
   FormGroup,
   Input,
   Label
 } from "reactstrap";

 export default class CustomModal extends Component {
   constructor(props) {
     super(props);
     this.state = {
       activeItem: this.props.activeItem
     };
   }
   handleChange = e => {
     let { name, value } = e.target;
     if (e.target.type === "checkbox") {
       value = e.target.checked;
     }
     const activeItem = { ...this.state.activeItem, [name]: value };
     this.setState({ activeItem });
   };
   render() {
     const { toggle, onSave } = this.props;
     return (
       <Modal isOpen={true} toggle={toggle}>
         <ModalHeader toggle={toggle}> TimeTable </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="section">Section</Label>
               <Input
                 type="text"
                 name="section"
                 value={this.state.activeItem.section}
                 onChange={this.handleChange}
                 placeholder="Enter Section"
               />
             </FormGroup>
             <FormGroup>
               <Label for="daysOfWeek">Days of the Week</Label>
               <Input
                 type="text"
                 name="daysOfWeek"
                 value={this.state.activeItem.daysOfWeek}
                 onChange={this.handleChange}
                 placeholder="Enter Days of the daysOfWeek"
               />
             </FormGroup>
             <FormGroup>
               <Label for="time">Time</Label>
               <Input
                 type="text"
                 name="time"
                 value={this.state.activeItem.time}
                 onChange={this.handleChange}
                 placeholder="Enter Time"
               />
             </FormGroup>
             <FormGroup>
               <Label for="location">Location</Label>
               <Input
                 type="text"
                 name="location"
                 value={this.state.activeItem.location}
                 onChange={this.handleChange}
                 placeholder="Enter Location"
               />
             </FormGroup>
           </Form>
         </ModalBody>
         <ModalFooter>
           <Button color="success" onClick={() => onSave(this.state.activeItem)}>
             Save
           </Button>
         </ModalFooter>
       </Modal>
     );
   }
 }