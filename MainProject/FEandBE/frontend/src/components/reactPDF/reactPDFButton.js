import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { Component } from 'react';
import ReactPDF from './reactPDF';
import axios from "axios";

const httpLoc = '/api/recommendedTextbooks';

export default class reactPDFButton extends Component {
    getRecommendedTextbooks = () => {
        axios
        .get(`${httpLoc}`)
        .then(res => this.setState({ recommendedTextbooks: res.data}))
        .catch(err => console.log(err));
    }

    testStateEdit = () => {
        this.setState({abc: '123'});
    }
    
    constructor(props) {
        // getRecommendedTextbooks = () => {
        //     axios
        //     .get(`${httpLoc}`)
        //     .then(res => this.setState({ recommendedTextbooks: res.data}))
        //     .catch(err => console.log(err));
        // }
    
        // testStateEdit = () => {
        //     this.setState({abc: '123'});
        // }

        super(props);
        this.state = {
            test: "abctestabc",
            recommendedTextbooks: this.getRecommendedTextbooks(),
            test2: [
                {
                    title: "object 1",
                    desc: "this is object 1"
                },
                {
                    title: "object 2",
                    desc: "this is object 2"
                }
            ],
            abc: this.testStateEdit()
        }
      }

    // state = {
    //     test: "abctestabc",
    //     recommendedTextbooks: this.getRecommendedTextbooks(),
    //     test2: [
    //         {
    //             title: "object 1",
    //             desc: "this is object 1"
    //         },
    //         {
    //             title: "object 2",
    //             desc: "this is object 2"
    //         }
    //     ]
    // }

    render() {
        return (
            <div>
                <div></div>
                <PDFDownloadLink document={<ReactPDF test={this.state.test} recommendedTextbooks={this.state.recommendedTextbooks}/>} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    {/* <div>
                        {this.state.recommendedTextbooks[0].title}
                    </div> */}
                    {/* <div>
                        {this.state.test2[0].title}
                    </div> */}
                    <div>
                        {this.state.abc}
                    </div>
                </PDFDownloadLink>
            </div>
        )
    }
}
