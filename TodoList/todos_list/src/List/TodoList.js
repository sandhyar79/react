import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1><center>List Of Todos</center></h1>
                <ul className="list-group">
                    {
                        this.props.items.map(item => {
                            return (
                                <TodoItem key={item.id}
                                    title={item.itemName}
                                    deleteButton={() => this.props.deleteButton(item.id)}
                                    editButton={() => this.props.editButton(item.id)} />
                            );
                        })
                    }
                </ul>
                <div className="clear_todo_list">
                    <button className="btn btn-danger btn-block mt-5" onClick={this.props.clearButton}>
                        Clear List
                    </button>
                </div>
            </div>
        )
    }
}
