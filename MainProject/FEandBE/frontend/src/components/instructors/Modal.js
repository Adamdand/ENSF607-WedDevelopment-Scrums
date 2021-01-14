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
         <ModalHeader toggle={toggle}> Instructors </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="section">Section</Label>
               <Input
                 type="textArea"
                 name="section"
                 value={this.state.activeItem.section}
                 onChange={this.handleChange}
                 placeholder="Enter Section #"
               />
             </FormGroup>
             <FormGroup>
               <Label for="fname">First Name</Label>
               <Input
                 type="text"
                 name="fname"
                 value={this.state.activeItem.fname}
                 onChange={this.handleChange}
                 placeholder="Enter First Name"
               />
             </FormGroup>
             <FormGroup>
               <Label for="lname">Last Name</Label>
               <Input
                 type="text"
                 name="lname"
                 value={this.state.activeItem.lname}
                 onChange={this.handleChange}
                 placeholder="Enter Last Name"
               />
             </FormGroup>
             <FormGroup>
               <Label for="phone">Phone</Label>
               <Input
                 type="text"
                 name="phone"
                 value={this.state.activeItem.phone}
                 onChange={this.handleChange}
                 placeholder="Enter Phone #"
               />
             </FormGroup>
             <FormGroup>
               <Label for="office">Office</Label>
               <Input
                 type="text"
                 name="office"
                 value={this.state.activeItem.office}
                 onChange={this.handleChange}
                 placeholder="Enter Office"
               />
             </FormGroup>
             <FormGroup>
               <Label for="email">Email</Label>
               <Input
                 type="text"
                 name="email"
                 value={this.state.activeItem.email}
                 onChange={this.handleChange}
                 placeholder="Enter Email"
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