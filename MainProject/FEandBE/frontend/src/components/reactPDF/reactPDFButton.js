import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { Component } from 'react';
import ReactPDF from './reactPDF';

export default class reactPDFButton extends Component {

    state = {
        test: "abctestabc"
    }


    render() {
        return (
            <div>
                <PDFDownloadLink document={<ReactPDF test={this.state.test} />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        )
    }
}
