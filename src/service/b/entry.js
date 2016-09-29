import React, { Component } from 'react'

let names = ['Amy', 'Joe', 'Eve', 'Bob']

export default class Component2 extends Component {
    render () {
        return (
            <div>
                <h3>DEMO 2, JSX syntax</h3>
                <ul>
                    {
                        names.map( (name) => {
                            return ( <li key={ name }>Hello, { name }!</li> )
                        } )
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
