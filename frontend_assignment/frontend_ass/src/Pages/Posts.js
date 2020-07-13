import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Activities from './Activities';
import axios from 'axios';
import '../App.css';
export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/posts.json')
            .then(response => response.data)
            .then(data => this.setState({
                posts: data.posts
            }));
    }
    userPosts() {
        const postData = this.state.posts.map(post =>
            <tr key={post.id.toString()}>
                {this.postUserList(post)}
            </tr>
        );
        return <>{postData}</>;
    }
    postUserList(post) {
        if (this.props.location.id === post.userId) {
            return <>{this.postUserItem(post)}</>
        }
    }
    postUserItem(post) {
        return (
            <div className="card mx-3 my-3 shadow">
                <h5 className="mx-3 my-3 text-capitalize">
                    {post.title}
                    <p style={{ float: "right" }}>
                        {post.time}
                    </p>
                </h5>
                <img className="card mx-3"
                    src={post.image}
                    alt={post.title}
                    style={{ width: "50%" }, { height: "400px" }}>
                </img>
                <h6 className="mx-3 my-3">
                    {post.body}
                </h6>
                {this.postComments(post)}
                {/* <Activities data = {this.props}
                id = {post.id}/>  */}
            </div>
        );
    }
    postComments(post) {
        return (
            <Link to={{
                pathname: "/comments",
                userId: post.userId,
                id: post.id,
                name: this.props.location.name
            }}>
                <p className="mx-3 my-2">View Comments</p>
            </Link>
        );
    }
    render() {
        return (
            <div>
                <div className="container shadow" style={{ float: "left" }}>
                    <h2 className="card-body mx-3 my-3 shadow">
                        Posted by : {this.props.location.name}
                    </h2>
                    {this.userPosts()}
                </div>
                <Activities data={this.props} />
            </div>
        );
    }
}
