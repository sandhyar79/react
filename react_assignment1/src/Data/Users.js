import React from 'react';
import '../App.css';
import ServiceReq from '../Services/ServiceReq';
import { Link } from 'react-router-dom';
import ErrorBoundary from './HandleError/ErrorBoundary';
export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.ServiceReq = new ServiceReq();
    }
    // componentDidMount() {
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(user => {
    //             this.setState({
    //                 users: user
    //             });
    //         });
    // }
    componentDidMount() {
        this.ServiceReq.then(user =>
            this.setState({
                users: user
            }))
    }
    tableHeader() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Todos</th>
                    <th>Posts</th></tr>
            </thead>
        );
    }
    tableData() {
        const rowData = this.state.users.map(user =>
            <tr key={user.id.toString()}>
                {this.tableRows(user)}
            </tr>);
        return <tbody>{rowData}</tbody>;
    }
    tableRows(user) {
        return (
            <>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>Street : {user.address.street}<br />
                    Suite : {user.address.suite}<br />
                    City : {user.address.city}<br />Zipcode : {user.address.zipcode}</td>
                <td>
                    <Link to={{
                        pathname: "/todos",
                        id: user.id,
                        name: user.name
                    }}>
                        View
                    </Link>
                </td>
                <td>
                    <Link to={{
                        pathname: "/posts",
                        id: user.id,
                        name: user.name
                    }}>
                        View
                    </Link>
                </td>
            </>
        );
    }
    render() {
        return (
            <>
                <div className="count_of_users">
                    No of users :
                        <span className="badge">
                        {this.state.users.length}
                    </span>
                </div>
                <br />
                <table className="table-striped table-hover" data-pagination="true">
                    <ErrorBoundary>
                        {this.tableHeader()}
                        {this.tableData()}
                    </ErrorBoundary>
                </table>
            </>
        );
    }
}