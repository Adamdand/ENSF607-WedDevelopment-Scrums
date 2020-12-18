import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <li>
                    id = {this.props.id}
                    <br/>
                    {this.props.body}
                    <br/>
                    <hr/>
                </li>
            </div>
        )
    }
}