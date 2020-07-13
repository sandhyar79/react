import React, { Component } from 'react'
import axios from 'axios';
export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/photos.json')
            .then(response => response.data)
            .then(data => this.setState({
                photos: data.albums
            }));
    }
    userPhotos() {
        const userPhoto = this.state.photos.map(photo =>
            <tr key={photo.id.toString()}>
                {this.userPhotosList(photo)}
            </tr>
        );
        return <>{userPhoto}</>;
    }
    userPhotosList(photo) {
        if ((this.props.location.userId === photo.userId) && (this.props.location.id === photo.albumId))
            return (
                <div className="card card-body mx-3 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">
                                    Album{photo.albumId}
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {photo.title}
                            </li>
                            {/* <li className="breadcrumb-item active" aria-current="page">Data</li> */}
                        </ol>
                    </nav>
                    <img className="card shadow"
                        src={photo.url}
                        alt={photo.title}
                        style={{ width: "400px" }, { height: "400px" }}>
                    </img>
                </div>
            );
    }
    render() {
        return (
            <div className="container card-body">
                {this.userPhotos()}
            </div>
        );
    }
}
