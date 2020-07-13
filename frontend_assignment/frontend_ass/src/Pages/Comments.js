import React, { Component } from 'react'
import axios from 'axios';
export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/comments.json')
            .then(response => response.data)
            .then(data => this.setState({
                comments: data.comments
            }));
    }
    userComments() {
        const userCommentVal = this.state.comments.map(comment =>
            <tr key={comment.postId.toString()}>
                {this.userCommentsList(comment)}
            </tr>
        );
        return <>{userCommentVal}</>;
    }
    userCommentsList(comments) {
        if ((this.props.location.userId === comments.userId) && (this.props.location.id === comments.id)) {
            return <>{this.userCommentsItems(comments)}</>;
        }
    }
    userCommentsItems(comments) {
        return (
            <div className="card my-3 mx-3">
                <div className="card my-3 mx-3">
                    <div className="my-3 mx-3 text-capitalize">
                        <img className="comments_profile mx-3 my-3"
                            src={comments.profilePicture}
                            alt={`$Comments` + comments.postId}
                        />
                        {this.props.location.name}
                        <p className="mx-3 my-3"
                            style={{ float: "right" }}>
                            {comments.time}
                        </p>
                    </div>
                </div>
                <h6 className="mx-3 my-3">{comments.body}</h6>
            </div>
        );
    }
    render() {
        return (
            <div className="container-body shadow mx-3 my-3">
                {this.userComments()}
            </div>
        );
    }
}
