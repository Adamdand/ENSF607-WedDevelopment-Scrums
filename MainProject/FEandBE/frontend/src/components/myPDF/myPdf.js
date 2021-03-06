import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styled, { css } from 'styled-components';
import '../../PrintButton.css';

class PrintThisComponent extends Component {
  render() {
    return (
      <div class="centered" >
        <button class="red button" onClick={() => window.print()}>PRINT</button>
        <p></p>
      </div>
    )
  }
}

export default PrintThisComponent

/**
    //jspdf generator function
    jsPdfGenerator = () => {
        // new document in jspdf
        var doc = new jsPDF('p', 'pt');

        //add some text
        doc.text(20,20,"This is default text")

        //set font of the pdf document
       // doc.setFont('courier"');

        //set font type
        //doc.setFontType('normal')

        //doc.text(20,30,'this is text with courier font')

        //save the pdf document
        doc.save("generated.pdf");


    }
   
    render() {
        return(
              <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Generate PDF</h1>
                <div className="row ">
                  <div className="col-md-6 col-sm-10 mx-auto p-0">
                    <div className="">
                    <button onClick={this.jsPdfGenerator} className="btn btn-primary">Generate PDF</button>
                      </div>
                  </div>
                </div>
              </main>
            );
          }
           
}
*/