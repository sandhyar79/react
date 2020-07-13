import React from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => response.data)
            .then(data => this.setState({
                users: data.users
            }));
    }
    tableHeader() {
        return (
            <thead className="col-5 col-md-5 mx-auto my-auto">
                <tr>
                    <td>
                        <h5 style={{ paddingTop: "20px" }}>
                            Select an Account
                        </h5>
                    </td>
                </tr>
            </thead>
        );
    }
    tableData() {
        const rowData = this.state.users.map(user =>
            <tr key={user.id.toString()}>
                {this.userDetails(user)}
            </tr>
        );
        return (
            <tbody className="col-8 col-md-8 card-body mx-auto my-auto shadow">
                {rowData}
            </tbody>
        );
    }
    userDetails(user) {
        return (
            <tr className="userData" style={{ overflowY: "scroll" }}>
                <td style={{ padding: "3px" }}>
                    <img src={user.profilepicture}
                        className="profile_image">
                    </img>
                    <Link to={{
                        pathname: "/profile",
                        id: user.id,
                        name: user.name
                    }}>
                        {user.name}
                    </Link>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <div className="mx-10 my-10"
                style={{ paddingTop: "150px" }, { overflow: "scroll" }, { height: "100%" }, { width: "100%" }}>
                <table className="col-5 col-md-5 mx-auto my-auto card shadow"
                    style={{ padding: "20px" }, { borderRadius: "20px" }, { overflowY: "scroll" }}>
                    {this.tableHeader()}
                    {this.tableData()}
                </table>
            </div>
        );
    }
}