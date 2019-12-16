import React from 'react';
import Service from './Service';
import '../App.css';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.Service = new Service();
    }
    componentDidMount() {
        this.Service.getUsers().then(data => {
            this.setState({
                users: data
            });
        });
    }
    usersHeader(){
        return(
            <div className="list_of_users nav navbar-default">
                <h2>List of Users</h2>
                <div className="count_of_users">
                    No of Users :
                    <span className="badge">
                        {this.state.users.length}
                    </span>
                </div>
            </div>
        );
    }
    usersBody(){
        return(
            <div className="table-striped table-hover">
                <DataTable value={this.state.users} paginator={true} rows={5} >
                    <Column field="name" header="Name" />
                    <Column field="username" header="UserName" />
                    <Column field="email" header="Email" />
                    <Column field="address" body={this.addressBody} header="Address" />
                    <Column body={this.todosView} header="Todos" />
                    <Column body={this.postsView} header="Posts" />
                </DataTable>
            </div>
        );
    }
    addressBody(addressData) {
        const street =
            <table>
                <tbody>
                    <tr>
                        <td>
                            Street : {addressData.address.street} <br />
                            Suite : {addressData.address.suite} <br />
                            City : {addressData.address.city} <br />
                            Zipcode : {addressData.address.zipcode}
                        </td>
                    </tr>
                </tbody>
            </table>
        return street;
    }
    todosView(rowData) {
        return (
            <>
                <Link to={
                    {
                        pathname: "/todos",
                        state: {
                            id: rowData.id,
                            name: rowData.name
                        }
                    }
                }>
                    View
                </Link>
            </>
        );
    }
    postsView(rowData) {
        return (
            <>
                <Link to={{
                    pathname: "/posts",
                    state: {
                        id: rowData.id,
                        name: rowData.name
                    }
                }}>
                    View
                </Link>
            </>
        );
    }
    render() {
        return (
            <> 
                <div className="users">
                    {this.usersHeader()}
                    {this.usersBody()}
                </div>
                
            </>
        );
    }
}   