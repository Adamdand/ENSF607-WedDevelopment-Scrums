import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";

const httpLoc = '/api/recommendedTextbooks';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default class reactPDF extends Component {
    // getRecommendedTextbooks = () => {
    //     axios
    //     .get(`${httpLoc}`)
    //     .then(res => this.setState({ recommendedTextbooks: res.data}))
    //     .catch(err => console.log(err));
    // }

    state = {
        hello: '123',
        // recommendedTextbooks: this.getRecommendedTextbooks()
    }

    hello = () => {
        this.setState({hello: 'abc'});
    }
    
    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                        {/* <Text>{this.hello()}</Text> */}
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                        <Text>{this.props.test}</Text>
                        <Text>Section #3</Text>
                        <Text>{this.state.hello}</Text>
                        {/* <Text>{this.state.recommendedTextbooks}</Text> */}
                        {/* <Text>{this.props.recommendedTextbooks}</Text> */}
                    </View>
                </Page>
            </Document>
        )
    }
}

