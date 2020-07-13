import React, { Component } from 'react'
import axios from 'axios';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            checked: false
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/todo.json')
            .then(response => response.data)
            .then(data => this.setState({
                todo: data.todo
            }));
    }
    userTodo() {
        const todoData = this.state.todo.map(todo =>
            <tr key={todo.id.toString()}>
                {this.userTodoList(todo)}
            </tr>
        );
        return <>{todoData}</>;
    }
    userTodoList(todo) {
        if (this.props.location.id === todo.userId) {
            return (
                <>{this.userTodoItems(todo)}</>
            );
        }
    }
    userTodoItems(todo) {
        if ((todo.completed === false) && (this.state.checked === false)) {
            return (
                <div className="card card-body mx-3 my-3">
                    {todo.title}
                </div>
            );
        }
        if ((todo.completed === true) && (this.state.checked === true)) {
            return (
                <div className="card card-body mx-3 my-3">
                    {todo.title}
                </div>
            );
        }
    }
    render() {
        const val = this.state.checked === false ? "Not Completed" : "Completed";
        return (
            <div className="container mx-5 my-5 shadow">
                {this.userTodo()}
                <input className="mx-3 my-3"
                    type="checkbox"
                    value={this.state.checked}
                    onChange={(e) => this.setState({ checked: !this.state.checked })} />&nbsp; {val}
            </div>
        );
    }
}
