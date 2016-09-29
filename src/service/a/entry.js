import React, { Component } from 'react'
export default class Component1 extends Component {
    componentDidMount() {
        alert('Welcome to React demos!!!')
    }
    render() {
        return (
            <div>
                <h3>DEMO 1, render() and life cycle</h3>
                <p>Hello World!</p>
                <hr/>
            </div>
        )
    }
}
