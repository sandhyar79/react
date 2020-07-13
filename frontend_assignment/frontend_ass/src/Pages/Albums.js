import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/albums.json')
            .then(response => response.data)
            .then(data =>
                this.setState({
                    albums: data.album
                })
            );
    }
    userAlbum() {
        const userAlbum = this.state.albums.map(album =>
            <tr key={album.id.toString()}>
                {this.userAlbumList(album)}
            </tr>
        );
        return <>{userAlbum}</>;
    }
    userAlbumList(albums) {
        return (
            <span className="card card-body mx-3 my-3" style={{ flexWrap: "wrap" }, { width: "100px" }, { margin: "10px" }}>
                <Link to={{
                    pathname: "/photos",
                    id: albums.id,
                    userId: this.props.data.location.id
                }}>{albums.title}</Link>
            </span>
        );
    }
    render() {
        return (
            <div className="container" style={{ display: "flex" }}>
                {this.userAlbum()}
            </div>
        );
    }
}
