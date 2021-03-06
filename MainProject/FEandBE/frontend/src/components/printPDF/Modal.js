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
   
   render() {
     const { toggle, onSave, onCancel } = this.props;
     return (
       <Modal isOpen={true} toggle={toggle}>
         <ModalHeader toggle={toggle}> Are you sure? </ModalHeader>
         <ModalFooter>
           <Button color="success" onClick={() => onSave()}>
             Print
           </Button>
           <Button onClick={() => onCancel()}>
             Cancel
           </Button>
         </ModalFooter>
       </Modal>
     );
   }
 }