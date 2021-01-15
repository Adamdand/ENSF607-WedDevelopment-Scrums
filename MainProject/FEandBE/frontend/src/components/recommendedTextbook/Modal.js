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
         <ModalHeader toggle={toggle}> Grade Component </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="component">Component</Label>
               <Input
                 type="text"
                 name="component"
                 value={this.state.activeItem.component}
                 onChange={this.handleChange}
                 placeholder="Enter Componenent"
               />
             </FormGroup>
             <FormGroup>
               <Label for="outcomes">Learning Outcome(s) Evaluated</Label>
               <Input
                 type="text"
                 name="outcomes"
                 value={this.state.activeItem.outcomes}
                 onChange={this.handleChange}
                 placeholder="Enter Learning Outcome(s)"
               />
             </FormGroup>
             <FormGroup>
               <Label for="weight">Weight</Label>
               <Input
                 type="number"
                 name="weight"
                 value={this.state.activeItem.weight}
                 onChange={this.handleChange}
                 placeholder="Enter Weight"
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