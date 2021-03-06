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
               <Label for="title">Title</Label>
               <Input
                 type="text"
                 name="title"
                 value={this.state.activeItem.title}
                 onChange={this.handleChange}
                 placeholder="Enter Title"
               />
             </FormGroup>
             <FormGroup>
               <Label for="author">Author</Label>
               <Input
                 type="text"
                 name="author"
                 value={this.state.activeItem.author}
                 onChange={this.handleChange}
                 placeholder="Enter Author"
               />
             </FormGroup>
             <FormGroup>
               <Label for="edition">Edition, Year</Label>
               <Input
                 type="text"
                 name="edition"
                 value={this.state.activeItem.edition}
                 onChange={this.handleChange}
                 placeholder="Enter Edition, Year"
               />
             </FormGroup>
             <FormGroup>
               <Label for="publisher">Publisher</Label>
               <Input
                 type="text"
                 name="publisher"
                 value={this.state.activeItem.publisher}
                 onChange={this.handleChange}
                 placeholder="Enter Publisher"
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