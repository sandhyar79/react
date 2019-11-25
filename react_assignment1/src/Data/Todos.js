import React from 'react';
import '../App.css';
import ServiceReq from '../Services/ServiceReq';
import ErrorBoundary from './HandleError/ErrorBoundary';
export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isCompleted: false
        }
        this.returnPreviousEvent = this.returnPreviousEvent.bind(this);
        this.displayValues = this.displayValues.bind(this);
        this.ServiceReq = new ServiceReq({ ...props });
    }
    returnPreviousEvent() {
        if (this.props.history)
            return this.props.history.goBack();
    }
    // componentDidMount() {
    //     const id = this.props.location.id;
    //     const url = "https://jsonplaceholder.typicode.com/todos?userId=" + id;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(todo => {
    //             this.setState({
    //                 todos: todo
    //             });
    //         });
    // }
    componentDidMount() {
        this.ServiceReq.then(todo => {
            this.setState({
                todos: todo
            });
        });
    }
    todosHeader() {
        return (
            <thead>
                <tr>
                    <td>
                        <div className="table-header">
                            <h3>
                                Todos Of {this.props.location.name}
                            </h3>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input type="checkbox" name="View All"
                                value={this.state.isCompleted}
                                onClick={this.displayValues} />
                            &nbsp; View All
                        </label>
                    </td>
                </tr>
            </thead>
        );
    }
    displayValues(event) {
        this.setState({
            isCompleted: event.target.checked
        });
        { this.todosContents() }
    }
    todosBody(todos) {
        if (this.state.isCompleted === false) {
            if (todos.completed === false)
                return <td>{todos.title}</td>
        }
        else {
            return <td>
                {todos.title}
            </td>
        }
    }
    todosContents() {
        const todos = this.state.todos.map(todo =>
            <tr key={todo.id.toString()}>
                {this.todosBody(todo)}
            </tr>
        );
        return <tbody>{todos}</tbody>;
    }
    todoFooter() {
        return (
            <tfoot>
                <tr>
                    <td>
                        <button type="button" className="btn" onClick={this.returnPreviousEvent}>
                            Back
                        </button>
                    </td>
                </tr>
            </tfoot>
        );
    }
    render() {
        return (
            <>
                <table className="table-striped table-hover">
                    <ErrorBoundary>
                        {this.todosHeader()}
                        {this.todosContents()}
                        {this.todoFooter()}
                    </ErrorBoundary>
                </table>
            </>
        );
    }
}