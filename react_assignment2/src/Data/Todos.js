import React from 'react';
import Service from './Service';
import '../App.css';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ErrorBoundary from './error/ErrorBoundary';
export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            checked: false
        };
        this.Service = new Service();
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        this.Service.getTodos().then(data => {
            this.setState({
                todos: data
            });
        });
    }
    goBack() {
        if (this.props.history)
            return this.props.history.goBack();
    }
    todos() {
        const todos = this.state.todos.map((todos) =>
            <li key={todos.id.toString()}>{this.todosData(todos)}</li>
        );
        return todos;
    }
    todosData(todos) {
        if (todos.userId === this.props.location.state.id) {
            if (this.state.checked === false) {
                if (todos.completed === false)
                    return this.todosDisplay(todos);
            }
            else
                return this.todosDisplay(todos);
        }
    }
    todosDisplay(todos) {
        return (
            <>
                <Accordion>
                    <AccordionTab header={todos.title} className="p-accordion-header">
                        <div className = "nav navbar-default">
                            {this.todosValue(todos)}
                        </div>
                    </AccordionTab>
                </Accordion><br/>
            </>
        );
    }
    todosValue(todos) {
        const value = todos.completed === false ? "Not Completed" : "Completed";
        return value;
    }
    render() {
        return (
            <>
                <ErrorBoundary>
                    <div className="todos">
                        <nav className="nav navbar-default">
                            <h2> Todos Of {this.props.location.state.name}</h2>
                        </nav>
                        <nav className="nav navbar-default">
                            <br />
                            <Checkbox name='View All'
                                onChange = {(e) => this.setState({ checked: e.checked })}
                                checked = {this.state.checked}>
                            </Checkbox>
                            <span className="checkbox_value">View All</span><br />
                            {this.todos()}
                            <Button label="Back" className="p-button-raised p-button-rounded" onClick={this.goBack} />
                        </nav>
                    </div>
                </ErrorBoundary>
            </>
        );
    }
}