import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ChangeProfile from './ChangeProfile';
//import {GMap} from 'primereact/gmap';
import '../App.css';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => response.data)
            .then(data => this.setState({
                profile: data.users
            }));
    }
    userProfile() {
        const userData = this.state.profile.map(profile =>
            <tbody key={profile.id.toString()} style={{ border: "1px solid white" }}>
                {this.userList(profile)}
            </tbody>);
        return <>{userData}</>;
    }
    userList(profile) {
        if (this.props.location.id === profile.id) {
            return <>{this.userListItems(profile)}</>;
        }
    }
    userListItems(profile) {
        return (
            <>
                {this.navLinkItems(profile)}
                {this.userDetails(profile)}
            </>
        );
    }
    navLinkItems(profile) {
        return (
            <>
                <tr height="100%" className="shadow">
                    <td colspan="30" rowspan="2" height="100%" className="shadow">
                        <navbar className="shadow">
                            <ul className="list-group shadow">
                                <li className="list-group-item shadow mx-2 my-2">
                                    <Link to={{
                                        pathname: "/profile",
                                        id: this.props.location.id,
                                        name: this.props.location.name
                                    }}>
                                        <h6>Profile</h6>
                                    </Link>
                                </li>
                                <li className="list-group-item shadow mx-2 my-2">
                                    <Link to={{
                                        pathname: "/posts",
                                        id: this.props.location.id,
                                        name: this.props.location.name
                                    }}>
                                        <h6>Posts</h6>
                                    </Link>
                                </li>
                                <li className="list-group-item shadow mx-2 my-2">
                                    <Link to={{
                                        pathname: "/gallary",
                                        id: this.props.location.id,
                                        name: this.props.location.name
                                    }}>
                                        <h6>Gallery</h6>
                                    </Link>
                                </li>
                                <li className="list-group-item shadow mx-2 my-2">
                                    <Link to={{
                                        pathname: "/todo",
                                        id: this.props.location.id,
                                        name: this.props.location.name
                                    }}>
                                        <h6>ToDo</h6>
                                    </Link>
                                </li>
                            </ul>
                        </navbar>
                    </td>
                    <td colspan="70" className="w3-card-4 shadow">
                        <p style={{ float: "left" }} className="mx-2 my-2">
                            <b>Profile</b>
                        </p>
                        <p style={{ float: "right" }} className="mx-2 my-2">
                            <img className="profile_image"
                                src={profile.profilepicture}
                                alt=""
                            />
                            <b>{profile.name}</b>
                        </p>
                    </td>
                </tr>
            </>
        );
    }
    userDetails(profile) {
        return (
            <>
                <tr className="shadow">
                    <td colspan="30" className="profile_detals shadow">
                        <ul className="list-group shadow">
                            <li className="list-group-item shadow mx-2 my-2">
                                <img src={profile.profilepicture}
                                    alt="" className="profile" />
                            </li>
                            <li className="list-group-item mx-2 my-2">
                                <h5 className="ml-5">{profile.name}</h5>
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Username : {profile.username}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                e-mail : {profile.email}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                phone : {profile.phone}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Website : {profile.website}
                            </li>
                            <li className="list-group-item shadow mx-2 my-2">
                                <h5 className="ml-5">Company</h5>
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Name : {profile.company.name}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                catchphrase : {profile.company.catchPhrase}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                bs : {profile.company.bs}
                            </li>
                        </ul>
                    </td>
                    <td colspan="40" className="shadow">
                        <ul className="list-group shadow">
                            <li className="list-group-item shadow mx-2 my-2">
                                <b>Address :</b>
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Street : {profile.address.street}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Suite : {profile.address.suite}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                City : {profile.address.city}
                            </li>
                            <li className="list-group ml-5 mx-2 my-2">
                                Zipcode : {profile.address.zipcode}
                            </li>
                            <li className="list-group ml-5">
                                {/* <GMap options={{
                                    center: {lat: 36.890257, lng: 30.707417},
                                    zoom: 12
                                }} style={{width: '100%', minHeight: '320px'}} /> */}
                                {/* <ChangeProfile/> */}
                            </li>
                        </ul>
                    </td>
                </tr>
            </>
        );
    }
    render() {
        return (
            <table border="1px thick solid gray shadow" width="100%" height="100%">
                {this.userProfile()}
            </table>
        );
    }
}