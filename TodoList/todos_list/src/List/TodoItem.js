import React, { Component } from 'react'
export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item d-flex justify-content-around my-2">
                <h6>{this.props.title}</h6>
                <div className="todo-icon">
                    <span className="material-icons mx-2 text-success" onClick={this.props.editButton}>
                        edit
                    </span>
                    <span className="material-icons mx-2 text-danger" onClick={this.props.deleteButton}>
                        delete
                    </span>
                </div>
            </li>

        )
    }
}
